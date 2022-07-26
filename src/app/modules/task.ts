export class Task {

    category: string = ``;

    description: string = ``;

    dueDate: string = ``;

    title: string = ``;

    urgency: string = ``;

    status: string = 'backlog';

    id: number = -1;

    assignedTo: string = '';

    constructor(data: Task) {
        this.category = data.category;
        this.description = data.description;
        this.dueDate = data.dueDate;
        this.title = data.title;
        this.urgency = data.urgency;
        this.assignedTo = data.assignedTo;
    }


}
