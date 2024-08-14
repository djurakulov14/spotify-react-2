import { useEffect, useState } from 'react'
import Player from './Components/Player.jsx'
import './index.scss'
import Layout from './Layout/Layout.jsx'

function App() {
	const [tracks, setTracks] = useState([])

	// const [tracks, setTracks] = useState([
	// 	{
	// 	  "id": "1",
	// 	  "playlistID": 1,
	// 	  "title": "Stressed Out",
	// 	  "url": "https://p.scdn.co/mp3-preview/4d82e9c363b235d0c66bceeb745c988831149d44?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Twenty One Pilots",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02de03bfc2991fd5bcfde65ba3",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "BlurryFace"
	// 	},
	// 	{
	// 	  "id": "2",
	// 	  "playlistID": 1,
	// 	  "title": "Onna Come Up",
	// 	  "url": "https://p.scdn.co/mp3-preview/c2ad3793be0c5f7fb71436e3342efd7a07b7fa3a?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Lil Eazzyy",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e0232399fb986ec8a7f6d8b01e5",
	// 	  "isLiked": true,
	// 	  "genre": "hip-hop",
	// 	  "album": "Underrated"
	// 	},
	// 	{
	// 	  "id": "3",
	// 	  "playlistID": 3,
	// 	  "title": "Whats Poppin",
	// 	  "url": "https://p.scdn.co/mp3-preview/bbaffb953cebd62fdb759575ddac821085f92415?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Jack Harlow",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02aeb14ead136118a987246b63",
	// 	  "isLiked": false,
	// 	  "genre": "hip-hop",
	// 	  "album": "They all say"
	// 	},
	// 	{
	// 	  "id": "4",
	// 	  "playlistID": 1,
	// 	  "title": "Lose Yourself",
	// 	  "url": "https://p.scdn.co/mp3-preview/d138df4ee1fe555c380c030722c480bdf3e79a50?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Eminem",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e021df11a8c8b0b7cf79ea359c1",
	// 	  "isLiked": true,
	// 	  "genre": "rap",
	// 	  "album": "SHADYXV"
	// 	},
	// 	{
	// 	  "id": "5",
	// 	  "playlistID": 1,
	// 	  "title": "Without Me",
	// 	  "url": "https://p.scdn.co/mp3-preview/1d63d428f0ac2ffe2f4434265031124747363500?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Eminem",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e026ca5c90113b30c3c43ffb8f4",
	// 	  "isLiked": true,
	// 	  "genre": "hip-hop",
	// 	  "album": "Eminem show"
	// 	},
	// 	{
	// 	  "id": "6",
	// 	  "playlistID": 2,
	// 	  "title": "The Real Slim Shady",
	// 	  "url": "https://p.scdn.co/mp3-preview/38fc12a77916a43bea470d18bef6a3542f8e9fae?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Eminem",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02dbb3dd82da45b7d7f31b1b42",
	// 	  "isLiked": false,
	// 	  "genre": "hip-hop",
	// 	  "album": "Marshal"
	// 	},
	// 	{
	// 	  "id": "7",
	// 	  "playlistID": 3,
	// 	  "title": "Till I Collapse",
	// 	  "url": "https://p.scdn.co/mp3-preview/5b3f004468ea54351d1a656577faa94a6a193b61?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Eminem",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e026ca5c90113b30c3c43ffb8f4",
	// 	  "isLiked": true,
	// 	  "genre": "hip-hop",
	// 	  "album": "Eminem show"
	// 	},
	// 	{
	// 	  "id": "8",
	// 	  "playlistID": 1,
	// 	  "title": "Immortal",
	// 	  "url": "https://p.scdn.co/mp3-preview/e5dffe32645df3ea781c2fb4af4f06587b5c6337?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "21 Savage",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02555d4944782c87c10ed07eec",
	// 	  "isLiked": true,
	// 	  "genre": "rap",
	// 	  "album": "immortal"
	// 	},
	// 	{
	// 	  "id": "9",
	// 	  "playlistID": 1,
	// 	  "title": "OUT WEST (feat. Young Thug)",
	// 	  "url": "https://p.scdn.co/mp3-preview/64167d9dbae2566289e251efb1fe94e6a9c454f8?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Travis Scott",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02dfc2f59568272de50a257f2f",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "JACKBOYZ"
	// 	},
	// 	{
	// 	  "id": "10",
	// 	  "playlistID": 2,
	// 	  "title": "Invincible",
	// 	  "url": "https://p.scdn.co/mp3-preview/f933d858a94c0949e89eebd4dec50e3786a182f1?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Pop Smoke",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02cd90e898c070ef21812ab363",
	// 	  "isLiked": false,
	// 	  "genre": "hip-hop",
	// 	  "album": "Meet Woo"
	// 	},
	// 	{
	// 	  "id": "11",
	// 	  "playlistID": 3,
	// 	  "title": "HIGHEST IN THE ROOM",
	// 	  "url": "https://p.scdn.co/mp3-preview/7a31c51e5690dc881150a189e0c29c0d18206729?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Travis Scott",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02e42b5fea4ac4c3d6328b622b",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "HIGHEST"
	// 	},
	// 	{
	// 	  "id": "12",
	// 	  "playlistID": 4,
	// 	  "title": "5% TINT",
	// 	  "url": "https://p.scdn.co/mp3-preview/fe87ea940ab9a555b3b66344df1d874075223523?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Travis Scott",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "ASTROWORLD"
	// 	},
	// 	{
	// 	  "id": "13",
	// 	  "playlistID": 1,
	// 	  "title": "METAMORPHOSIS",
	// 	  "url": "https://p.scdn.co/mp3-preview/b6d364ec0fe6d209b73847edaec3d3b4fad4ee2c?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "INTERWORLD",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02b852a616ae3a49a1f6b0f16e",
	// 	  "isLiked": true,
	// 	  "genre": "rap",
	// 	  "album": "METAMORPHOSIS"
	// 	},
	// 	{
	// 	  "id": "14",
	// 	  "playlistID": 2,
	// 	  "title": "Dior",
	// 	  "url": "https://p.scdn.co/mp3-preview/c64d85430ac0e731e7e488d7bb882c221941184a?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Pop Smoke",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e028fe5d04b06aff90f9fe796f5",
	// 	  "isLiked": false,
	// 	  "genre": "hip-hop",
	// 	  "album": "Meet Woo"
	// 	},
	// 	{
	// 	  "id": "15",
	// 	  "playlistID": 1,
	// 	  "title": "EA (feat. 21 Savage)",
	// 	  "url": "https://p.scdn.co/mp3-preview/ca16ff472ac60a2c02e331089aabfcfcb2c1adee?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Young Nudy",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e0256bf918dc517050ebf113d22",
	// 	  "isLiked": true,
	// 	  "genre": "hip-hop",
	// 	  "album": "DIE FOE BITCHES"
	// 	},
	// 	{
	// 	  "id": "16",
	// 	  "playlistID": 4,
	// 	  "title": "For The Night (feat. Lil Baby & DaBaby)",
	// 	  "url": "https://p.scdn.co/mp3-preview/9b51570445c023b98f9b71fbefa1250702978ebc?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Pop Smoke",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e0277ada0863603903f57b34369",
	// 	  "isLiked": true,
	// 	  "genre": "hip-hop",
	// 	  "album": "SHOOT THE STAR"
	// 	},
	// 	{
	// 	  "id": "17",
	// 	  "playlistID": 1,
	// 	  "title": "Element",
	// 	  "url": "https://p.scdn.co/mp3-preview/1c50778ddb9872629972eecf9311b03a8a8ea6d9?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Pop Smoke",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02cd90e898c070ef21812ab363",
	// 	  "isLiked": true,
	// 	  "genre": "hip-hop",
	// 	  "album": "Meet Woo"
	// 	},
	// 	{
	// 	  "id": "18",
	// 	  "playlistID": 2,
	// 	  "title": "Mockingbird",
	// 	  "url": "https://p.scdn.co/mp3-preview/e177fa6eeabcc2645541322e30ca4631f96e8516?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Eminem",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02eab40fc794b88b9d1e012578",
	// 	  "isLiked": true,
	// 	  "genre": "rap",
	// 	  "album": "Curtain"
	// 	},
	// 	{
	// 	  "id": "19",
	// 	  "playlistID": 1,
	// 	  "title": "Sing For The Moment",
	// 	  "url": "https://p.scdn.co/mp3-preview/a9f46c28106931d1bb5a1c6d69c196d9b68170db?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Eminem",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02eab40fc794b88b9d1e012578",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "Curtain"
	// 	},
	// 	{
	// 	  "id": "20",
	// 	  "playlistID": 4,
	// 	  "title": "Ass Like That",
	// 	  "url": "https://p.scdn.co/mp3-preview/041d01dd41c2a866bc0047caa3732a59aee4606d?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Eminem",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02726d48d93d02e1271774f023",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "Curtain"
	// 	},
	// 	{
	// 	  "id": "21",
	// 	  "playlistID": 1,
	// 	  "title": "Tuff",
	// 	  "url": "https://p.scdn.co/mp3-preview/24945d030aa8065ad0cc145a853177bdcc01cfed?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Jaah SLT",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e024e5ba79c48a449a072411435",
	// 	  "isLiked": true,
	// 	  "genre": "hip-hop",
	// 	  "album": "TUff"
	// 	},
	// 	{
	// 	  "id": "22",
	// 	  "playlistID": 2,
	// 	  "title": "Rich Nigga Shit (feat. Young Thug)",
	// 	  "url": "https://p.scdn.co/mp3-preview/29043964b7a323d67c7aafb7c6d062ca252fb89d?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "21 Savage",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02aa57907bf0cb2ca0c8cc74bc",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "SAVAGE MODE ||"
	// 	},
	// 	{
	// 	  "id": "23",
	// 	  "playlistID": 3,
	// 	  "title": "Ambition For Cash",
	// 	  "url": "https://p.scdn.co/mp3-preview/61c57d7b5b1ffd07681fb6d27acf87e058d20f87?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Key Glock",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e026cf001db12b8569231951c96",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "Ambition"
	// 	},
	// 	{
	// 	  "id": "24",
	// 	  "playlistID": 1,
	// 	  "title": "Bitch Please II",
	// 	  "url": "https://p.scdn.co/mp3-preview/6509db7bcb5f99a2010b7c649736ccae4e39159b?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Eminem, Dr. Dre, Snoop Dogg, Xzibit, Nate Dogg",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02dbb3dd82da45b7d7f31b1b42",
	// 	  "isLiked": true,
	// 	  "genre": "hip-hop",
	// 	  "album": "Marshal"
	// 	},
	// 	{
	// 	  "id": "25",
	// 	  "playlistID": 1,
	// 	  "title": "REVENGE",
	// 	  "url": "https://p.scdn.co/mp3-preview/656e2aad487b960019b6708b777ac1f468a2ea2d?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "$atori Zoom",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e028463a2f8d0cd0b97bb5e9ffd",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "PHASE 4"
	// 	},
	// 	{
	// 	  "id": "26",
	// 	  "playlistID": 2,
	// 	  "title": "Gangsta's Paradise",
	// 	  "url": "https://p.scdn.co/mp3-preview/ee6e8e88dde3d296bcb3f2f6988f3cc9c5ae17a8?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Coolio",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02c31d3c870a3dbaf7b53186cc",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "Paradise"
	// 	},
	// 	{
	// 	  "id": "27",
	// 	  "playlistID": 3,
	// 	  "title": "Knife Talk (with 21 Savage ft. Project Pat)",
	// 	  "url": "https://p.scdn.co/mp3-preview/c76080a68aff69f19d166daaf8f828aef8db4584?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Drake",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e029b19c107109de740bad72df5",
	// 	  "isLiked": true,
	// 	  "genre": "rap",
	// 	  "album": "BlurryFace"
	// 	},
	// 	{
	// 	  "id": "28",
	// 	  "playlistID": 4,
	// 	  "title": "Still D.R.E.",
	// 	  "url": "https://p.scdn.co/mp3-preview/79e15e078c4208e2b41f2e5c2510e9a9c062c0be?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Dr. Dre",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e029b19c107109de740bad72df5",
	// 	  "isLiked": false,
	// 	  "genre": "hip-hop",
	// 	  "album": "2001"
	// 	},
	// 	{
	// 	  "id": "29",
	// 	  "playlistID": 1,
	// 	  "title": "All Eyez On Me (ft. Big Syke)",
	// 	  "url": "https://p.scdn.co/mp3-preview/eeac374708dd48ee4a4265c5f16172c010dd89dc?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "2Pac",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02073aebff28f79959d2543596",
	// 	  "isLiked": true,
	// 	  "genre": "rap",
	// 	  "album": "All Eyez"
	// 	},
	// 	{
	// 	  "id": "30",
	// 	  "playlistID": 2,
	// 	  "title": "BUTTERFLY EFFECT",
	// 	  "url": "https://p.scdn.co/mp3-preview/5bd1d9932d5f7e16bcba918d602ed7638ea77fdc?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Travis Scott",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e020eb9240c0c5bbba4a0495587",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "ASTROWORLD"
	// 	},
	// 	{
	// 	  "id": "31",
	// 	  "playlistID": 3,
	// 	  "title": "goosebumps",
	// 	  "url": "https://p.scdn.co/mp3-preview/580bc0b4b3c1f33835606dd44797a58aa171525c?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Travis Scott",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02f54b99bf27cda88f4a7403ce",
	// 	  "isLiked": false,
	// 	  "genre": "hip-hop",
	// 	  "album": "goosebumps"
	// 	},
	// 	{
	// 	  "id": "32",
	// 	  "playlistID": 4,
	// 	  "title": "Under The Influence",
	// 	  "url": "https://p.scdn.co/mp3-preview/1283080982a427978aa2d048e6a8d1ad37e0f6f6?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Eminem",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02dbb3dd82da45b7d7f31b1b42",
	// 	  "isLiked": false,
	// 	  "genre": "hip-hop",
	// 	  "album": "Marshal"
	// 	},
	// 	{
	// 	  "id": "33",
	// 	  "playlistID": 1,
	// 	  "title": "Walk It Talk It",
	// 	  "url": "https://p.scdn.co/mp3-preview/f39b97b6f519a6766e13a7000fc755c00f5ecce3?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Migos",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e029c188c494d8bfaf895411890",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "BlurryFace"
	// 	},
	// 	{
	// 	  "id": "34",
	// 	  "playlistID": 2,
	// 	  "title": "Ambitionz Az A Ridah",
	// 	  "url": "https://p.scdn.co/mp3-preview/0038a23c6c0bfcb796f64c826f31e18bebca9a39?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "2Pac",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02073aebff28f79959d2543596",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "Ambitionz"
	// 	},
	// 	{
	// 	  "id": "35",
	// 	  "playlistID": 3,
	// 	  "title": "Superman",
	// 	  "url": "https://p.scdn.co/mp3-preview/fde5c96d6a05fb23328b8138ab46f67cce8745fa?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Eminem",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e026ca5c90113b30c3c43ffb8f4",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "Eminem show"
	// 	},
	// 	{
	// 	  "id": "36",
	// 	  "playlistID": 4,
	// 	  "title": "Body (Remix)",
	// 	  "url": "https://p.scdn.co/mp3-preview/fea719747bd30130fa874e22b50ac78aecd283d4?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Russ Millions",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02c39ad754fbcc3b85d9dd947b",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "Body"
	// 	},
	// 	{
	// 	  "id": "37",
	// 	  "playlistID": 1,
	// 	  "title": "Day 'N' Nite (Nightmare)",
	// 	  "url": "https://p.scdn.co/mp3-preview/e2930580655d1197331f144a19a0b5d740178e9c?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Kid Cudi",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02713f297a7bdc1d48971062b2",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "Nightmare"
	// 	},
	// 	{
	// 	  "id": "38",
	// 	  "playlistID": 2,
	// 	  "title": "RIPSTICK",
	// 	  "url": "https://p.scdn.co/mp3-preview/b6e480d17d1fc52fb7a67b48da8abf8d815d907a?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "$atori Zoom",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e028463a2f8d0cd0b97bb5e9ffd",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "PHASE 4"
	// 	},
	// 	{
	// 	  "id": "39",
	// 	  "playlistID": 3,
	// 	  "title": "Big Poppa - 2005 Remaster",
	// 	  "url": "https://p.scdn.co/mp3-preview/dc151c8f9bbded3bfb3d4839888aa1f57d9d051b?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "The Notorious B.I.G.",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e02db09958534ac66f9a90d3cf7",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "READY TO DIE"
	// 	},
	// 	{
	// 	  "id": "40",
	// 	  "playlistID": 4,
	// 	  "title": "Run It Up (feat. Offset & Moneybagg Yo)",
	// 	  "url": "https://p.scdn.co/mp3-preview/17b3286e7ff365a1dbf5362cfb0654144c4ff463?cid=774b29d4f13844c495f206cafdad9c86",
	// 	  "artists": "Lil Tjay",
	// 	  "img": "https://i.scdn.co/image/ab67616d00001e025af0305457ff290e06dcc4c2",
	// 	  "isLiked": false,
	// 	  "genre": "rap",
	// 	  "album": "DESTINATED 2"
	// 	}
	//   ])
	
	useEffect(() => {

		fetch('http://localhost:7777/tracks')
			.then((res) => res.json())
			.then((res) => {
				setTracks(res)
				console.log(res);
				
			})
	}, [])
  
  return (
    <>
	<Layout>

        <Player setTracks={setTracks} tracks={tracks}/>
	</Layout>
    </>
  )
}

export default App
