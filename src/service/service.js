
// Edge stores src, dest and weight
// adjacentList will be 2D array, row will be Name and columns with be Edge
// ISB -> LHR or LHR -> ISB cost 200

export default class Locations {
    constructor() {
        this.adjacentMatrix = [];
    }
    addDistance(source, destination, weight) {
        const size = Object.keys(this.adjacentMatrix);
        if (this.adjacentMatrix != null && size.length > 0) {
            var edge = new Edge(source, destination, weight)
            var edges = this.adjacentMatrix[source] == undefined ? [] : this.adjacentMatrix[source];
            edges.push(edge);
            this.adjacentMatrix[source] = edges;

            edge = new Edge(destination, source, weight)
            edges = this.adjacentMatrix[destination] == undefined ? [] : this.adjacentMatrix[destination];
            edges.push(edge);
            this.adjacentMatrix[destination] = edges;

        } else {
            var edgeS = new Edge(source, destination, weight)
            var sourceList = []
            sourceList.push(edgeS)
            this.adjacentMatrix[source] = sourceList

            var edgeD = new Edge(destination, source, weight)
            var destinationList = []
            destinationList.push(edgeD)
            this.adjacentMatrix[destination] = destinationList

        }
    }
    searchLocation(name) {
        if (this.adjacentMatrix != null) {
            const names = Object.keys(this.adjacentMatrix);
            for (const loc of names) {
                if (loc == name) {
                    return true
                }
            }
        }
        return false
    }
    printGraph() {
        const names = Object.keys(this.adjacentMatrix);
        for (const name of names) {
            // console.log("Location: " + name + " ")
            this.adjacentMatrix[name].forEach(loc => {
                console.log(loc)
            });
        }
    }
    findShortestPath(startName, endName) {
        var distance = {}
        var visited = {}
        var paths = {}
        const names = Object.keys(this.adjacentMatrix);

        for (const name of names) {
            paths[name] = -1
            distance[name] = Number.MAX_SAFE_INTEGER
            visited[name] = false
        }
        distance[startName] = 0;

        for (var count = 0; count < Object.keys(this.adjacentMatrix).length; count++) {
            var selectedNode = this.minDistance(visited, distance)
            visited[selectedNode] = true

            // find adjacent nodes/locations
            var vertexes = this.adjacentMatrix[selectedNode]
            for (const vertex of vertexes) {
                if (distance[vertex.destination] > distance[selectedNode] + vertex.weight) {
                    distance[vertex.destination] = distance[selectedNode] + vertex.weight
                    paths[vertex.destination] = selectedNode
                }
            }
        }
        return this.getPath(distance, startName, paths, endName);
    }
    minDistance(visited, distance) {
        var min = Number.MAX_SAFE_INTEGER
        var selectedLocation = "";
        var names = Object.keys(this.adjacentMatrix);
        for (const name of names) {
            if (visited[name] == false && distance[name] <= min) {
                selectedLocation = name
                min = distance[name]
            }
        }
        return selectedLocation
    }
    getPathNodes(parent, end, pathList) {
        if (parent[end] == undefined)
            return;
        pathList.push(end)
        this.getPathNodes(parent, parent[end], pathList);
        return pathList
    }
    getPath(dist, start, paths, end) {
        var pathList = []
        var road = {}
        pathList = this.getPathNodes(paths, end, pathList).reverse();
        road = {
            'cost': dist[end],
            'start': start,
            'end': end,
            'path': pathList 
        }
        return road
    }
}

class Edge {
    constructor(source, destination, weight) {
        this.source = source
        this.destination = destination
        this.weight = weight
    }
}