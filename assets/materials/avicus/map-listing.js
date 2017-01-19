window.onload = function() {
    var source = document.getElementById("maps-template").innerHTML;
    var template = Handlebars.compile(source);
    var data = {
        // CC licenses that are currently accepted: BY_SA: true, BY_NC_SA: true
        maps: [ {
			map: "Aardvark",
            slug: "aardvark",
            path: "atlas/DTM/Aardvark/",
            authors: [
                {player_name: "ViceWatercolour", player_uuid: "bf331953-4f92-43ee-8abc-7544b8234936"}
            ],
            tags: [ {dtm: true} ],
            discussion: "",
            official: true,
            commercial: true,
            download: true,
            xml: true,	
		}, {	
			map: "Boolean Classic",
            slug: "boolean-classic",
            path: "atlas/CTF/BooleanClassic/",
            authors: [
                {player_name: "Squiddard", player_uuid: "d9b4ffbc-11d0-453a-a93f-82dc59fca4b6"}
            ],
            tags: [ {ctf: true} ],
            discussion: "",
            official: true,
            commercial: true,
            download: true,
            xml: true,
		}, {
            map: "Clay Wars",
            slug: "clay-wars",
            path: "atlas/DTM/ClayWars/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {dtm: true} ],
            discussion: "",
            official: true,
            commercial: false,
            download: true,
            xml: true,
		}, {
			map: "Elevated 2",
            slug: "elevated-2",
            path: "atlas/Frenzy/Elevated2/",
            authors: [
                {player_name: "ViceWatercolour", player_uuid: "bf331953-4f92-43ee-8abc-7544b8234936"}
            ],
            tags: [ {frenzy: true} ],
            discussion: "",
            official: true,
            commercial: true,
            download: true,
            xml: true,
		}, {
		    map: "Fatal Temple",
            slug: "fatal-temple",
            path: "atlas/Arcade/Bombers/FatalTemple/",
            authors: [
                {player_name: "Squiddard", player_uuid: "d9b4ffbc-11d0-453a-a93f-82dc59fca4b6"}
            ],
            tags: [ {arcade: true} ],
            discussion: "",
            official: true,
            commercial: true,
            download: true,
            xml: true,
		}, {
			map: "Fort Aqua",
            slug: "fort-aqua",
            path: "atlas/DTM/FortAqua/",
            authors: [
                {player_name: "ViceWatercolour", player_uuid: "bf331953-4f92-43ee-8abc-7544b8234936"}
            ],
            tags: [ {dtm: true} ],
            discussion: "",
            official: true,
            commercial: true,
            download: true,
            xml: true,	
		}, {
			map: "Knuckles and Goggles",
            slug: "knuckles-and-goggles",
            path: "atlas/Frenzy/KnucklesAndBrokenGoggles/",
            authors: [
                {player_name: "ViceWatercolour", player_uuid: "bf331953-4f92-43ee-8abc-7544b8234936"}
            ],
            tags: [ {frenzy: true} ],
            discussion: "",
            official: true,
            commercial: true,
            download: true,
            xml: true,
		}, {
			map: "Parkour: Debris",
            slug: "parkour-deris",
            path: "atlas/Arcade/Parkour/ParkourDebris/",
            authors: [
                {player_name: "Squiddard", player_uuid: "d9b4ffbc-11d0-453a-a93f-82dc59fca4b6"}
            ],
            tags: [ {arcade: true} ],
            discussion: "",
            official: true,
            commercial: true,
            download: true,
            xml: true,
		}, {
			map: "Quarry",
            slug: "quarry",
            path: "atlas/Arcade/GhostSquadron/Quarry",
            authors: [
                {player_name: "Squiddard", player_uuid: "d9b4ffbc-11d0-453a-a93f-82dc59fca4b6"}
            ],
            tags: [ {arcade: true} ],
            discussion: "",
            official: true,
            commercial: true,
            download: true,
            xml: true,		
		}, {
			map: "Salzburg",
            slug: "salzburg",
            path: "atlas/Frenzy/Salzburg/",
            authors: [
                {player_name: "ViceWatercolour", player_uuid: "bf331953-4f92-43ee-8abc-7544b8234936"}
            ],
            tags: [ {frenzy: true} ],
            discussion: "",
            official: true,
            commercial: true,
            download: true,
            xml: true,
		}, {
			map: "Salzburg 2",
            slug: "salzburg-2",
            path: "atlas/Frenzy/Salzburg2/",
            authors: [
                {player_name: "ViceWatercolour", player_uuid: "bf331953-4f92-43ee-8abc-7544b8234936"}
            ],
            tags: [ {frenzy: true} ],
            discussion: "",
            official: true,
            commercial: true,
            download: true,
            xml: true,
		}, {
			map: "Scaffold",
            slug: "scaffold",
            path: "atlas/DTC/Scaffold/",
            authors: [
                {player_name: "ViceWatercolour", player_uuid: "bf331953-4f92-43ee-8abc-7544b8234936"}
            ],
            tags: [ {dtc: true} ],
            discussion: "",
            official: true,
            commercial: true,
            download: true,
            xml: true,		
		}, {
			map: "Shadient",
            slug: "shadient",
            path: "atlas/Frenzy/Shadient/",
            authors: [
                {player_name: "Squiddard", player_uuid: "d9b4ffbc-11d0-453a-a93f-82dc59fca4b6"}
            ],
            tags: [ {frenzy: true} ],
            discussion: "",
            official: true,
            commercial: true,
            download: true,
            xml: true,
		}, {
			map: "Silentas Violent",
            slug: "silentas-violent",
            path: "atlas/KOTH/SilentasViolent/",
            authors: [
                {player_name: "ViceWatercolour", player_uuid: "bf331953-4f92-43ee-8abc-7544b8234936"}
            ],
            tags: [ {dtm: true} ],
            discussion: "",
            official: true,
            commercial: true,
            download: true,
            xml: true,	
        }, ],
		
    };
    var output = template(data);
    document.getElementById("maps-output").innerHTML = output;
}
