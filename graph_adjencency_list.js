class Vertix {
    constructor(name) {
        this.name = name
        this.neighbors = []
    }
    getName() {
        return this.name
    }
    addNeighbor(vertix) {
        this.neighbors.push(vertix)
    }
    getNeighbors() {
        return this.neighbors
    }
}

// Undirected Graph
class Graph {
    constructor() {
        this.vertices = {}
    }

    addVertix(vertix) {
        if(!this.vertices[vertix.getName()]) {
            this.vertices[vertix.getName()] = vertix
        }
    }
    
    getVertix(name){
        if(!this.vertices[name]) return null
        return this.vertices[name]
    }

    addEdge(source, destination) {
        // we make sure both source and destination exists in the graph
        const sourceVertix = this.vertices[source]
        const destinationVertix = this.vertices[destination]
        if(sourceVertix && destinationVertix) {
            if(!sourceVertix.getNeighbors().includes(destinationVertix)) {
                sourceVertix.addNeighbor(destinationVertix)
            }
            if(!destinationVertix.getNeighbors().includes(sourceVertix)) {
                destinationVertix.addNeighbor(sourceVertix)
            }
        }
    }

    /**
     * CHECK IF PATH EXISTS BETWEEN TWO VERTIX
     * @param {*} from 
     * @param {*} to 
     */
    bfs(from, to) {

        const fromVertix = this.getVertix(from)
        const toVertix = this.getVertix(to)

        if(!fromVertix) return false
        if(!toVertix) return false
        if(fromVertix === toVertix) return true

        const vertix = this.getVertix(from)
        let queue = vertix.neighbors

        while(queue.length > 0) {
            const vertix = queue.shift()
            if(vertix.name === toVertix.name) {
                return true
            }
            if(vertix != null) {
                queue = [...queue, ...vertix.neighbors]
            }
        }

        return false
    }

    print() {
        for (let [key, node] of Object.entries(this.vertices)) {
            const neighbors = node.getNeighbors()
            if(neighbors.length > 0) {
                neighbors.forEach(neighbor => {
                    console.log(node.getName()+' <---> '+neighbor.getName())
                })
            } else {
                console.log(node.getName())
            }
        }
    }
}


const graph = new Graph()
// create vertices and add them to the graph
const vertices = ['A', 'B', 'C', 'D', 'E', 'F']

vertices.forEach((vertix) => {
    graph.addVertix(new Vertix(vertix))
})

// create edges between vertices

const edges = [
    ['A','B'], 
    ['A','C'],
    ['C','D'], 
    ['C','E']
]

edges.forEach((edge) => {
    graph.addEdge(edge[0], edge[1])
})

// print the graph

graph.print()
console.log(graph.bfs('C', 'B'))