export class ToDoModell {
	name: string;
	id: number;
	created: Date;
	desc: string;

	constructor(name, desc = '') {
		this.name = name;
		this.desc = desc;
		this.created = new Date();
		this.id = -1;
	}
}
