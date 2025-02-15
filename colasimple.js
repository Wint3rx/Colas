class Cola {
    constructor(maxSize = Infinity) {
        this.items = [];
        this.maxSize = maxSize; // Límite máximo de elementos en la cola
    }

    // Insertar elementos
    enqueue(element) {
        if (this.isFull()) {
            throw new Error("La cola está llena. No se pueden añadir más elementos.");
        }
        if (element === null || element === undefined) {
            throw new Error("No se puede añadir un elemento nulo o indefinido a la cola.");
        }
        this.items.push(element);
    }

    // Quitar elementos
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("La cola está vacía. No se pueden quitar elementos.");
        }
        return this.items.shift();
    }

    // Verificar si la cola está vacía
    isEmpty() {
        return this.items.length === 0;
    }

    // Verificar si la cola está llena
    isFull() {
        return this.items.length >= this.maxSize;
    }

    // Obtener el frente de la cola
    front() {
        if (this.isEmpty()) {
            throw new Error("La cola está vacía. No hay elementos para mostrar.");
        }
        return this.items[0];
    }

    // Obtener el tamaño de la cola
    size() {
        return this.items.length;
    }

    // Mostrar todos los elementos de la cola (útil para depuración)
    mostrar() {
        return this.items;
    }
}

// Prueba de la cola
try {
    let MiCola = new Cola(5); // Cola con un límite máximo de 5 elementos

    console.log("¿La cola está vacía?", MiCola.isEmpty()); // true
    console.log("¿La cola está llena?", MiCola.isFull()); // false

    MiCola.enqueue("Cliente 1");
    MiCola.enqueue("Cliente 2");
    MiCola.enqueue("Cliente 3");
    console.log("Elementos en la cola:", MiCola.mostrar()); // ["Cliente 1", "Cliente 2", "Cliente 3"]
    console.log("Tamaño de la cola:", MiCola.size()); // 3

    console.log("Frente de la cola:", MiCola.front()); // "Cliente 1"

    console.log("Atendiendo a:", MiCola.dequeue()); // "Cliente 1"
    console.log("Elementos en la cola después de atender:", MiCola.mostrar()); // ["Cliente 2", "Cliente 3"]
    console.log("Tamaño de la cola:", MiCola.size()); // 2

    MiCola.enqueue("Cliente 4");
    MiCola.enqueue("Cliente 5");
    MiCola.enqueue("Cliente 6"); // Esto lanzará un error porque la cola está llena
} catch (error) {
    console.error(error.message);
}