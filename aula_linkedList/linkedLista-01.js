class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null; // ponteiro par o proximo nó 
    }
}


class linkedList
{
    constructor()
    {
        this.head = null; // a ista começa vazia
    }

    // inserir no inicio da lista
    insertATBeginning(value)
    {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // incerir no fim da lista
    insertATEnd(value)
    {
        let newNode = new Node(value);
        if (this.head === null) 
        {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null)
        {
            current = current.next;
        }
        current.next = newNode;
    }

    // remove um no por valor
    removeByValue(value)
    {
        if (this.head === null) 
        {
            return;
        }

        // se o nó a ser removido for o primeiro
        if (this.head.value === value) 
        {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.value !== value)
        {
            current = current.next;
        }

        if (current.next !== null)
        {
            current.next = current.next.next;
        } 
    }

    // buscar um no por valor
    find(value)
    {
        let current = this.head;

        while (current !== null)
        {
            if (current.value === value)
            {
                return current;
            }
            current = current.next;
        }

        return null; // retorna null se o valor não for encontrado
    }

    // exibir a lista (opcional, para facilitar a visualização)
    printList()
    {
        let current = this.head;
        let list = '';
        while (current !== null)
        {
            list += current.value + ' -> ';
            current = current.next;
        }
        console.log(list + 'null');
    }
}