module.exports = {
	GRASS: {
		tile: new ut.Tile('.', 0, 128, 0),
		darkTile: new ut.Tile('.', 128, 128, 128),
		solid: false,
		opaque: false,
		name: 'Grass'
	},
	STAIRS_DOWN: {
		tile: new ut.Tile('>', 255, 255, 255),
		darkTile: new ut.Tile('>', 128, 128, 128),
		solid: false,
		opaque: false,
		name: 'Stairs Down'
	},
	STAIRS_UP: {
		tile: new ut.Tile('<', 255, 255, 255),
		darkTile: new ut.Tile('<', 128, 128, 128),
		solid: false,
		opaque: false,
		name: 'Stairs Up'
	},
	BUSH: {
		tile: new ut.Tile('&', 0, 128, 0),
		darkTile: new ut.Tile('&', 128, 128, 128),
		solid: true,
		opaque: true,
		name: 'Bush'
	},
	WATER: {
		tile: new ut.Tile('~', 0, 0, 255),
		darkTile: new ut.Tile('~', 128, 128, 128),
		solid: true,
		opaque: false,
		name: 'Water'
	}
}