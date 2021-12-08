let heros = [
    {
        "id": "01", "name": "Aragon", "race": "human", "age": 120,
        "strengths": [ "strength", "hand-to-hand combat", "horses", "character" ],
        "weakness": [ ]
    },
    {
        "id": "02", "name": "Black Widow", "race": "human", "age": 32,
        "strengths": [ "agility", "hand-to-hand combat", "knives" ],
        "weakness": [ "brainwashing" ]
    },
    {
        "id": "03", "name": "Legolas", "race": "elf", "age": 1000,
        "strengths": [ "eye-sight", "archery", "hand-to-hand combat", "running" ],
        "weakness": [ "caves" ]
    },
    {
        "id": "04", "name": "Gandalf", "race": "maia", "age": 2019,
        "strengths": [ "magic", "hand-to-hand combat", ],
        "weakness": [ "age" ]
    },
    {
        "id": "05", "name": "Thor", "race": "asgard", "age": 793,
        "strengths": [ "strength", "hammer" ],
        "weakness": [ "hubris", "hot-headed", "loki" ]
    },
    {
        "id": "06", "name": "SuperMan", "race": "Krypton", "age": 80,
        "strengths": [ "strength", "xray vision", "flys" ],
        "weakness": [ "krytonite" ]
    },
    { "id": "07", "name": "SpiderMan", "race": "human", "age": 17,
        "strengths": [ "stength", "webs", "jumping" ],
        "weakness": [ "experience", "Aunt May" ]
    },
    { "id": "08", "name": "Batman", "race": "human", "age": 35,
        "strengths": [ "stength", "hand-to-hand combat", "gadgets", ],
        "weakness": [ "cannot fly", "human" ]
    }
];

// Find and return the heros with age greater than the parameter age.
findHero = function(age, result) {
    result(null, heros.filter(hero => hero.age > age));
}

module.exports = {
    findHero
}