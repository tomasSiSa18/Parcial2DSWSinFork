export class Pais {

    id: number;
    name: String;
    formation_year: number;
    official_language: String;
    capital: String;
    description: String;
    flag: String;

    constructor(idN: number, nameN: String, formation_yearN: number, official_languageN: String, capitalN: String, descriptionN: String, flagN: String) {

        this.id = idN;
        this.name = nameN;
        this.formation_year = formation_yearN;
        this.official_language = official_languageN;
        this.capital = capitalN;
        this.description = descriptionN;
        this.flag = flagN;

    }

}