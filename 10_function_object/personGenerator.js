const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Екатерина",
            "id_2": "Ольга",
            "id_3": "Анна",
            "id_4": "Eлизавета",
            "id_5": "Диана",
            "id_6": "Виктория",
            "id_7": "Мария",
            "id_8": "Наталья",
            "id_9": "Марина",
            "id_10": "Елена"
        }
    }`,
    birthYearJson: `{
        "count": 10,
        "list": {     
            "id_1": "1996 года рождения",
            "id_2": "1997 года рождения",
            "id_3": "1998 года рождения",
            "id_4": "1999 года рождения",
            "id_5": "2000 года рождения",
            "id_6": "2001 года рождения",
            "id_7": "2002 года рождения",
            "id_8": "2003 года рождения",
            "id_9": "2004 года рождения",
            "id_10": "2005 года рождения"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function() {

        return Math.floor(Math.random() * 2) == 0 ? this.GENDER_MALE : this.GENDER_FEMALE;

    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

     randomSurname: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomBirthYear: function() {
        return this.randomValue(this.birthYearJson);
    },
   
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birthYear = this.randomBirthYear();
        return this.person;
    }
    };
