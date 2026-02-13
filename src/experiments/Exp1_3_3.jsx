class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, I'm ${this.name}.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    introduce() {
        return `Hello, I'm ${this.name} and I'm studying ${this.major}.`;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    introduce() {
        return `Hi, I'm ${this.name} and I teach ${this.subject}.`;
    }
}

export default function Exp1_3_3() {
    const people = [
        new Person("Athanasia", 30),
        new Student("Benjamin", 20, "Computer Science"),
        new Teacher("Prof. Dr. Edward Robinson", 40, "Mathematics")
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6">Person Class Hierarchy</h1>

            {people.map((person, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
                    <h2 className="text-xl font-semibold">
                        {person.name} ({person.constructor.name})
                    </h2>
                    <p>Age: {person.age}</p>
                    <p className="italic mt-2">{person.introduce()}</p>
                </div>
            ))}
        </div>
    );
}