type GenericObject = { [key: string]: any };

export const genders = [
	{ label: 'Male', value: 'male' },
	{ label: 'Female', value: 'female' },
];

export const levels = [
	{ label: '1st', value: '1st' },
	{ label: '2nd', value: '2nd' },
	{ label: '3rd', value: '3rd' },
	{ label: '4th', value: '4th' },
	{ label: 'Graduated', value: 'Graduated' },
];

export const UNIVERSITIES: GenericObject = {
	BUET: ['CSE', 'EEE', 'Mechanical', 'Civil'],
	DU: ['Pharmacy', 'Physics', 'Zoology'],
	CUET: ['CSE', 'EEE', 'Mechanical', 'Civil'],
	KUET: ['CSE', 'EEE', 'Mechanical', 'Civil'],
};

export const COLLEGES = ['Notre Dame College, Dhaka', 'Dhaka City College', 'Holly Cross'];


export const TUITION_REQUESTS = [
	{
		id: '1',
		studentName: 'Nishan',
		tutorName: 'Raju',
		details: {
			version: 'Bangla Version',
			class: 'Inter 1st year',
			subjects: ['Physics', 'Chemistry', 'Math'],
			district: 'Dhaka',
			area: 'arambagh',
		},
		negotiations: [
			{
				user: 'Raju',
				message: 'Hello',
			},
		],
	},
	{
		id: '2',
		studentName: 'Wasif Towfiq',
		tutorName: 'Raju',
		details: {
			version: 'English Version',
			class: 'Inter 2nd year',
			subjects: ['Physics', 'Math'],
			district: 'Dhaka',
			area: 'badda',
		},
		negotiations: [
			{
				user: 'Raju',
				message: 'Hello',
			},
		],
	},
];


export const AREAS: GenericObject = {
  "Dhaka": [
    "Azimpur",
    "Badda",
    "Malibagh",
    "Arambagh",
    "Demra",
    "Matuail",
    "Sarulia",
    "Dhaka CantonmentTSO",
    "Dhaka Cantt.",
    "Dhamrai",
    "Kamalpur",
    "Jigatala TSO",
    "Dhanmondi",
    "Banani TSO",
    "Gulshan",
    "Gulshan Model Town",
    "Dhania TSO",
    "Jatrabari",
    "Joypara",
    "Narisha",
    "Palamganj",
    "Ati",
    "Keraniganj",
    "Dhaka Jute Mills",
    "Kalatia",
    "KhilgaonTSO",
    "Khilgaon",
    "KhilkhetTSO",
    "Khilkhet",
    "Posta TSO",
    "Lalbag",
    "Mirpur TSO",
    "Mirpur",
    "Mohammadpur Housing",
    "Mohammadpur",
    "Sangsad BhabanTSO",
    "BangabhabanTSO",
    "Motijheel",
    "DilkushaTSO",
    "Agla",
    "Nawabganj",
    "Churain",
    "Daudpur",
    "Hasnabad",
    "Khalpar",
    "New Market TSO",
    "New market",
    "Dhaka GPO",
    "Palton",
    "Shantinagr TSO",
    "Ramna",
    "Basabo TSO",
    "Sabujbag",
    "Amin Bazar",
    "Savar",
    "Dairy Farm",
    "EPZ",
    "Jahangirnagar Univer",
    "Kashem Cotton Mills",
    "Rajphulbaria",
    "Savar Canttonment",
    "Saver P.A.T.C",
    "Shimulia",
    "Dhaka Sadar HO",
    "Sutrapur",
    "Gendaria TSO",
    "Wari TSO",
    "Tejgaon TSO",
    "Tejgaon",
    "Dhaka Politechnic",
    "Tejgaon Industrial Area",
    "Uttara Model TwonTSO",
    "Uttara"
  ],
  "Faridpur": [
    "Alfadanga",
    "Bhanga",
    "Boalmari",
    "Rupatpat",
    "Charbadrashan",
    "Charbhadrasan",
    "Ambikapur",
    "Faridpur Sadar",
    "Baitulaman Politecni",
    "Faridpursadar",
    "Kanaipur",
    "Kamarkali",
    "Madukhali",
    "Nagarkanda",
    "Talma",
    "Bishwa jaker Manjil",
    "Sadarpur",
    "Hat Krishapur",
    "Shriangan"
  ],
  "Gazipur": [
    "B.O.F",
    "Gazipur Sadar",
    "B.R.R",
    "Chandna",
    "National University",
    "Kaliakaar",
    "Safipur",
    "Kaliganj",
    "Pubail",
    "Santanpara",
    "Vaoal Jamalpur",
    "kapashia",
    "Kapashia",
    "Ershad Nagar",
    "Monnunagar",
    "Nishat Nagar",
    "Barmi",
    "Sreepur",
    "Bashamur",
    "Boubi",
    "Kawraid",
    "Satkhamair",
    "Rajendrapur",
    "Sripur",
    "Rajendrapur Canttome"
  ],
  "Gopalganj": [
    "Barfa",
    "Gopalganj Sadar",
    "Chandradighalia",
    "Ulpur",
    "Jonapur",
    "Kashiani",
    "Ramdia College",
    "Ratoil",
    "Kotalipara",
    "Batkiamari",
    "Maksudpur",
    "Khandarpara",
    "Patgati",
    "Tungipara"
  ],
  "Jamalpur": [
    "Dewangonj",
    "Dewangonj S. Mills",
    "Durmoot",
    "Islampur",
    "Gilabari",
    "Jamalpur",
    "Nandina",
    "Narundi",
    "Malandah",
    "Mahmoodpur",
    "Malancha",
    "Balijhuri",
    "Mathargonj",
    "Bausee",
    "Shorishabari",
    "Gunerbari",
    "Jagannath Ghat",
    "Jamuna Sar Karkhana",
    "Pingna"
  ],
  "Kishoreganj": [
    "Bajitpur",
    "Laksmipur",
    "Sararchar",
    "Bhairab",
    "Bhairob",
    "Hossenpur",
    "Itna",
    "Karimganj",
    "Gochhihata",
    "Katiadi",
    "Kishoreganj S.Mills",
    "Kishoreganj Sadar",
    "Maizhati",
    "Nilganj",
    "Chhoysuti",
    "Kuliarchar",
    "Abdullahpur",
    "Mithamoin",
    "MIthamoin",
    "Nikli",
    "Ostagram",
    "Pakundia",
    "Tarial"
  ],
  "Madaripur": [
    "Bahadurpur",
    "Barhamganj",
    "Nilaksmibandar",
    "Umedpur",
    "Kalkini",
    "kalkini",
    "Sahabrampur",
    "Charmugria",
    "Madaripur Sadar",
    "Habiganj",
    "Kulpaddi",
    "Mustafapur",
    "Khalia",
    "Rajoir"
  ],
  "Manikganj": [
    "Doulatpur",
    "Gheor",
    "Jhitka",
    "Lechhraganj",
    "Barangail",
    "Manikganj Sadar",
    "Gorpara",
    "Mahadebpur",
    "Manikganj Bazar",
    "Baliati",
    "Saturia",
    "Aricha",
    "Shibloya",
    "Shibaloy",
    "Tewta",
    "Uthli",
    "Baira",
    "Singari",
    "joymantop",
    "Singair"
  ],
  "Munshiganj": [
    "Gajaria",
    "Hossendi",
    "Rasulpur",
    "Gouragonj",
    "Lohajong",
    "Haldia SO",
    "Haridia",
    "Haridia DESO",
    "Korhati",
    "Lohajang",
    "Madini Mandal",
    "Medini Mandal EDSO",
    "Kathakhali",
    "Munshiganj Sadar",
    "Mirkadim",
    "Rikabibazar",
    "Ichapur",
    "Sirajdikhan",
    "Kola",
    "Malkha Nagar",
    "Shekher Nagar",
    "Baghra",
    "Srinagar",
    "Barikhal",
    "Bhaggyakul",
    "Hashara",
    "Kolapara",
    "Kumarbhog",
    "Mazpara",
    "Vaggyakul SO",
    "Bajrajugini",
    "Tangibari",
    "Baligao",
    "Betkahat",
    "Dighirpar",
    "Hasail",
    "Pura",
    "Pura EDSO"
  ],
  "Mymensingh": [
    "Bhaluka",
    "Fulbaria",
    "Duttarbazar",
    "Gaforgaon",
    "Kandipara",
    "Shibganj",
    "Usti",
    "Gouripur",
    "Ramgopalpur",
    "Dhara",
    "Haluaghat",
    "Munshirhat",
    "Atharabari",
    "Isshwargonj",
    "Sohagi",
    "Muktagachha",
    "Agriculture Universi",
    "Mymensingh Sadar",
    "Biddyaganj",
    "Kawatkhali",
    "Pearpur",
    "Shombhuganj",
    "Gangail",
    "Nandail",
    "Beltia",
    "Phulpur",
    "Tarakanda",
    "Ahmadbad",
    "Trishal",
    "Dhala",
    "Ram Amritaganj"
  ],
  "Narayanganj": [
    "Araihazar",
    "Gopaldi",
    "Baidder Bazar",
    "Bara Nagar",
    "Barodi",
    "Bandar",
    "BIDS",
    "D.C Mills",
    "Madanganj",
    "Nabiganj",
    "Fatulla Bazar",
    "Fatullah",
    "Narayanganj Sadar",
    "Bhulta",
    "Rupganj",
    "Kanchan",
    "Murapara",
    "Nagri",
    "Adamjeenagar",
    "Siddirganj",
    "LN Mills"
  ],
  "Narsingdi": [
    "Belabo",
    "Hatirdia",
    "Monohordi",
    "Katabaria",
    "Karimpur",
    "Narshingdi Sadar",
    "Madhabdi",
    "Narshingdi College",
    "Panchdona",
    "UMC Jute Mills",
    "Char Sindhur",
    "Palash",
    "Ghorashal",
    "Ghorashal Urea Facto",
    "Bazar Hasnabad",
    "Raypura",
    "Radhaganj bazar",
    "Shibpur"
  ],
  "Netrokona": [
    "Susnng Durgapur",
    "Susung Durgapur",
    "Atpara",
    "Barhatta",
    "Dharampasha",
    "Dharmapasha",
    "Dhobaura",
    "Sakoai",
    "Kalmakanda",
    "Kendua",
    "Khaliajhri",
    "Khaliajuri",
    "Shaldigha",
    "Madan",
    "Moddoynagar",
    "Moddhynagar",
    "Mohanganj",
    "Baikherhati",
    "Netrakona Sadar",
    "Jaria Jhanjhail",
    "Purbadhola",
    "Shamgonj"
  ],
  "Rajbari": [
    "Baliakandi",
    "Nalia",
    "Mrigibazar",
    "Pangsha",
    "Ramkol",
    "Ratandia",
    "Goalanda",
    "Rajbari Sadar",
    "Khankhanapur"
  ],
  "Shariatpur": [
    "Bhedorganj",
    "Damudhya",
    "Gosairhat",
    "Jajira",
    "Bhozeshwar",
    "Naria",
    "Gharisar",
    "Kartikpur",
    "Upshi",
    "Angaria",
    "Shariatpur Sadar",
    "Chikandi"
  ],
  "Sherpur": [
    "Bakshigonj",
    "Jhinaigati",
    "Gonopaddi",
    "Nakla",
    "Hatibandha",
    "Nalitabari",
    "Sherpur Shadar",
    "Shribardi"
  ],
  "Tangail": [
    "Basail",
    "Bhuapur",
    "Delduar",
    "Elasin",
    "Hinga Nagar",
    "Jangalia",
    "Lowhati",
    "Patharail",
    "D. Pakutia",
    "Ghatail",
    "Dhalapara",
    "Ghatial",
    "Lohani",
    "Zahidganj",
    "Gopalpur",
    "Hemnagar",
    "Jhowail",
    "Ballabazar",
    "Kalihati",
    "Elinga",
    "Nagarbari",
    "Nagarbari SO",
    "Nagbari",
    "Palisha",
    "Rajafair",
    "Kashkawlia",
    "Kashkaolia",
    "Dhobari",
    "Madhupur",
    "Gorai",
    "Mirzapur",
    "Jarmuki",
    "M.C. College",
    "Mohera",
    "Warri paikpara",
    "Dhuburia",
    "Nagarpur",
    "Salimabad",
    "Kochua",
    "Sakhipur",
    "Kagmari",
    "Tangail Sadar",
    "Korotia",
    "Purabari",
    "Santosh"
  ],
  "Bogura": [
    "Adamdighi",
    "Alamdighi",
    "Nasharatpur",
    "Santahar",
    "Bogra Canttonment",
    "Bogra Sadar",
    "Dhunat",
    "Gosaibari",
    "Dupchachia",
    "Talora",
    "Gabtoli",
    "Sukhanpukur",
    "Kahalu",
    "Nandigram",
    "Chandan Baisha",
    "Sariakandi",
    "Chandaikona",
    "Sherpur",
    "Palli Unnyan Accadem",
    "Shibganj",
    "Sonatola"
  ],
  "Joypurhat": [
    "Akklepur",
    "Akkelpur",
    "jamalganj",
    "Tilakpur",
    "Joypurhat Sadar",
    "kalai",
    "Khetlal",
    "Panchbibi",
    "panchbibi"
  ],
  "Naogaon": [
    "Ahsanganj",
    "Bandai",
    "Badalgachhi",
    "Dhamuirhat",
    "Mahadebpur",
    "Naogaon Sadar",
    "Niamatpur",
    "Nitpur",
    "Panguria",
    "Porsa",
    "Patnitala",
    "Balihar",
    "Prasadpur",
    "Manda",
    "Kashimpur",
    "Raninagar",
    "Moduhil",
    "Sapahar"
  ],
  "Natore": [
    "Abdulpur",
    "Gopalpur UPO",
    "Gopalpur U.P.O",
    "Lalpur S.O",
    "Baraigram",
    "Harua",
    "Dayarampur",
    "Hatgurudaspur",
    "Laxman",
    "Baiddyabal Gharia",
    "Natore Sadar",
    "Digapatia",
    "Madhnagar",
    "Singra"
  ],
  "Chapainawabganj": [
    "Bholahat",
    "Amnura",
    "Chapainawabganj Sadar",
    "Chapinawbganj Sadar",
    "Rajarampur",
    "Ramchandrapur",
    "Mandumala",
    "Nachol",
    "Gomashtapur",
    "Rohanpur",
    "Kansart",
    "Shibganj U.P.O",
    "Manaksha",
    "Banwarinagar",
    "Bera",
    "Kashinathpur",
    "Nakalia",
    "Puran Bharenga",
    "Bhangura",
    "Chatmohar",
    "Debottar",
    "Dhapari",
    "Ishwardi",
    "Pakshi",
    "Rajapur",
    "Hamayetpur",
    "Pabna Sadar",
    "Kaliko Cotton Mills",
    "Sathia",
    "Sagarkandi",
    "Sujanagar"
  ],
  "Pabna": [],
  "Rajshahi": [
    "Arani",
    "Bagha",
    "Bhabaniganj",
    "Taharpur",
    "Charghat",
    "Sarda",
    "Durgapur",
    "Godagari",
    "Premtoli",
    "Khodmohanpur",
    "Khod Mohanpur",
    "Lalitganj",
    "Rajshahi Sugar Mills",
    "Shyampur",
    "Putia",
    "Binodpur Bazar",
    "Rajshahi Sadar",
    "Ghuramara",
    "Kazla",
    "Rajshahi Canttonment",
    "Rajshahi Court",
    "Rajshahi University",
    "Sapura",
    "Tanor"
  ],
  "Sirajgonj": [
    "Baiddya Jam Toil",
    "Belkuchi",
    "Enayetpur",
    "Rajapur",
    "Sohagpur",
    "Sthal",
    "Dhangora",
    "Malonga",
    "Gandail",
    "Kazipur",
    "Shuvgachha",
    "Jamirta",
    "Shahjadpur",
    "Kaijuri",
    "Porjana",
    "Raipur",
    "Sirajganj Sadar",
    "Rashidabad",
    "Tarash",
    "Lahiri Mohanpur",
    "Ullapara",
    "Salap",
    "Ullapara R.S"
  ],
  "Dinajpur": [
    "Bangla Hili",
    "Biral",
    "Birampur",
    "Birganj",
    "Chrirbandar",
    "Ranirbandar",
    "Dinajpur Rajbari",
    "Dinajpur Sadar",
    "Khansama",
    "Pakarhat",
    "Maharajganj",
    "Daudpur",
    "Nababganj",
    "Gopalpur",
    "Ghoraghat",
    "Osmanpur",
    "Parbatipur",
    "Phulbari",
    "Setabganj"
  ],
  "Gaibandha": [
    "Bonarpara",
    "saghata",
    "Gaibandha Sadar",
    "Gobindhaganj",
    "Gobindaganj",
    "Mahimaganj",
    "Palashbari",
    "Bharatkhali",
    "Phulchhari",
    "Naldanga",
    "Saadullapur",
    "Bamandanga",
    "Sundarganj"
  ],
  "Kurigram": [
    "Bhurungamari",
    "Chilmari",
    "Jorgachh",
    "Kurigram Sadar",
    "Pandul",
    "Phulbari",
    "Nageshwar",
    "Nazimkhan",
    "Rajarhat",
    "Rajibpur",
    "Roumari",
    "Bazarhat",
    "Ulipur"
  ],
  "Lalmonirhat": [
    "Aditmari",
    "Hatibandha",
    "Kulaghat SO",
    "Lalmonirhat Sadar",
    "Moghalhat",
    "Baura",
    "Patgram",
    "Burimari",
    "Tushbhandar"
  ],
  "Nilphamari": [
    "Dimla",
    "Ghaga Kharibari",
    "Chilahati",
    "Domar",
    "Jaldhaka",
    "Kishoriganj",
    "Nilphamari Sadar",
    "Nilphamari Sugar Mil",
    "Syedpur",
    "Syedpur Upashahar"
  ],
  "Panchagarh": [
    "Boda",
    "Chotto Dab",
    "Mirjapur",
    "Dabiganj",
    "Panchagar Sadar",
    "Panchagra Sadar",
    "Tetulia"
  ],
  "Rangpur": [
    "Badarganj",
    "Shyampur",
    "Gangachara",
    "Haragachh",
    "Kaunia",
    "Mithapukur",
    "Pirgachha",
    "Alamnagar",
    "Rangpur Sadar",
    "Mahiganj",
    "Rangpur Cadet Colleg",
    "Rangpur Carmiecal Col",
    "Rangpur Upa-Shahar",
    "Taraganj"
  ],
  "Thakurgaon": [
    "Baliadangi",
    "Lahiri",
    "Jibanpur",
    "Pirganj",
    "Nekmarad",
    "Rani Sankail",
    "Ruhia",
    "Thakurgaon Sadar",
    "Shibganj",
    "Thakurgaon Road"
  ],
  "Barguna": [
    "Amtali",
    "Bamna",
    "Barguna Sadar",
    "Nali Bandar",
    "Betagi",
    "Darul Ulam",
    "Kakchira",
    "Patharghata"
  ],
  "Barishal": [
    "Agailzhara",
    "Gaila",
    "Paisarhat",
    "Babuganj",
    "Barisal Cadet",
    "Chandpasha",
    "Madhabpasha",
    "Nizamuddin College",
    "Rahamatpur",
    "Thakur Mallik",
    "Barajalia",
    "Osman Manjil",
    "Barisal Sadar",
    "Bukhainagar",
    "Jaguarhat",
    "Kashipur",
    "Patang",
    "Saheberhat",
    "Sugandia",
    "Batajor",
    "Gouranadi",
    "Kashemabad",
    "Tarki Bandar",
    "Langutia",
    "Mahendiganj",
    "Laskarpur",
    "Nalgora",
    "Ulania",
    "Charkalekhan",
    "Muladi",
    "Kazirchar",
    "Charamandi",
    "Sahebganj",
    "kalaskati",
    "Padri Shibpur",
    "Shialguni",
    "Dakuarhat",
    "Uzirpur",
    "Dhamura",
    "Jugirkanda",
    "Shikarpur"
  ],
  "Bhola": [
    "Bhola Sadar",
    "Joynagar",
    "Borhanuddin UPO",
    "Mirzakalu",
    "Charfashion",
    "Dularhat",
    "Keramatganj",
    "Doulatkhan",
    "Hajipur",
    "Hajirhat",
    "Hatshoshiganj",
    "Daurihat",
    "Lalmohan UPO",
    "Gazaria"
  ],
  "Jhalokati": [
    "Baukathi",
    "Jhalokathi Sadar",
    "Gabha",
    "Nabagram",
    "Shekherhat",
    "Amua",
    "Kathalia",
    "Niamatee",
    "Shoulajalia",
    "Beerkathi",
    "Nalchhiti",
    "Rajapur"
  ],
  "Patuakhali": [
    "Bagabandar",
    "Bauphal",
    "Birpasha",
    "Kalaia",
    "Kalishari",
    "Dashmina",
    "Galachipa",
    "Gazipur Bandar",
    "Khepupara",
    "Mahipur",
    "Dumkee",
    "Patuakhali Sadar",
    "Moukaran",
    "Rahimabad",
    "Subidkhali"
  ],
  "Pirojpur": [
    "Banaripara",
    "Chakhar",
    "Bhandaria",
    "Dhaoa",
    "Kanudashkathi",
    "Jolagati",
    "kaukhali",
    "Joykul",
    "Kaukhali",
    "Keundia",
    "Betmor Natun Hat",
    "Mathbaria",
    "Gulishakhali",
    "Halta",
    "Shilarganj",
    "Tiarkhali",
    "Tushkhali",
    "Nazirpur",
    "Sriramkathi",
    "Hularhat",
    "Pirojpur Sadar",
    "Parerhat",
    "Darus Sunnat",
    "Swarupkathi",
    "Jalabari",
    "Kaurikhara"
  ],
  "Bandarban": [
    "Alikadam",
    "Bandarban Sadar",
    "Naikhong",
    "Roanchhari",
    "Ruma",
    "Lama",
    "Thanchi"
  ],
  "Brahmanbaria": [
    "Akhaura",
    "Azampur",
    "Gangasagar",
    "Banchharampur",
    "Ashuganj",
    "Brahamanbaria Sadar",
    "Ashuganj Share",
    "Poun",
    "Talshahar",
    "Chandidar",
    "Kasba",
    "Chargachh",
    "Gopinathpur",
    "Kuti",
    "Jibanganj",
    "Nabinagar",
    "Kaitala",
    "Laubfatehpur",
    "Rasullabad",
    "Ratanpur",
    "Salimganj",
    "Shahapur",
    "Shamgram",
    "Fandauk",
    "Nasirnagar",
    "Chandura",
    "Sarail",
    "Sarial",
    "Shahbajpur"
  ],
  "Chandpur": [
    "Baburhat",
    "Chandpur Sadar",
    "Puranbazar",
    "Sahatali",
    "Chandra",
    "Faridganj",
    "Gridkaliandia",
    "Islampur Shah Isain",
    "Rampurbazar",
    "Rupsha",
    "Bolakhal",
    "Hajiganj",
    "Gandamara",
    "Hayemchar",
    "Kachua",
    "Pak Shrirampur",
    "Rahima Nagar",
    "Shachar",
    "Kalipur",
    "Matlobganj",
    "Mohanpur",
    "Chotoshi",
    "Shahrasti",
    "Islamia Madrasha",
    "Khilabazar",
    "Pashchim Kherihar Al"
  ],
  "Chattogram": [
    "Anowara",
    "Anawara",
    "Battali",
    "Paroikora",
    "Boalkhali",
    "Charandwip",
    "Iqbal Park",
    "Kadurkhal",
    "Kanungopara",
    "Sakpura",
    "Saroatoli",
    "Al- Amin Baria Madra",
    "Chittagong Sadar",
    "Amin Jute Mills",
    "Anandabazar",
    "Bayezid Bostami",
    "Chandgaon",
    "Chawkbazar",
    "Chitt. Cantonment",
    "Chitt. Customs Acca",
    "Chitt. Politechnic In",
    "Chitt. Sailers Colon",
    "Chittagong Airport",
    "Chittagong Bandar",
    "Chittagong GPO",
    "Export Processing",
    "Firozshah",
    "Halishahar",
    "Halishshar",
    "Jalalabad",
    "Jaldia Merine Accade",
    "Middle Patenga",
    "Mohard",
    "North Halishahar",
    "North Katuli",
    "Pahartoli",
    "Patenga",
    "Rampura TSO",
    "Wazedia",
    "Barma",
    "East Joara",
    "Dohazari",
    "Gachbaria",
    "Bhandar Sharif",
    "Fatikchhari",
    "Harualchhari",
    "Najirhat",
    "Nanupur",
    "Narayanhat",
    "Chitt.University",
    "Hathazari",
    "Fatahabad",
    "Gorduara",
    "Katirhat",
    "Madrasa",
    "Mirzapur",
    "Nuralibari",
    "Yunus Nagar",
    "Banigram",
    "Jaldi",
    "Gunagari",
    "Khan Bahadur",
    "Chunti",
    "Lohagara",
    "Padua",
    "Abutorab",
    "Mirsharai",
    "Azampur",
    "Bharawazhat",
    "Darrogahat",
    "Joarganj",
    "Korerhat",
    "Mohazanhat",
    "Budhpara",
    "Patiya",
    "Patiya Head Office",
    "Dhamair",
    "Rangunia",
    "B.I.T Post Office",
    "Rouzan",
    "Beenajuri",
    "Dewanpur",
    "Fatepur",
    "Gahira",
    "Guzra Noapara",
    "jagannath Hat",
    "Kundeshwari",
    "Mohamuni",
    "Sandwip",
    "Shiberhat",
    "Urirchar",
    "Baitul Ijjat",
    "Satkania",
    "Bazalia",
    "Barabkunda",
    "Sitakunda",
    "Baroidhala",
    "Bawashbaria",
    "Bhatiari",
    "Fouzdarhat",
    "Jafrabad",
    "Kumira"
  ],
  "Cumilla": [
    "Barura",
    "Murdafarganj",
    "Poyalgachha",
    "Brahmanpara",
    "Burichang",
    "Maynamoti bazar",
    "Chandia",
    "Chandina",
    "Madhaiabazar",
    "Batisa",
    "Chouddagram",
    "Chiora",
    "Comilla Contoment",
    "Comilla Sadar",
    "Courtbari",
    "Halimanagar",
    "Suaganj",
    "Dashpara",
    "Daudkandi",
    "Eliotganj",
    "Gouripur",
    "Barashalghar",
    "Davidhar",
    "Dhamtee",
    "Gangamandal",
    "Homna",
    "Bipulasar",
    "Laksam",
    "Lakshamanpur",
    "Chhariabazar",
    "Langalkot",
    "Dhalua",
    "Gunabati",
    "Bangra",
    "Muradnagar",
    "Companyganj",
    "Pantibazar",
    "Ramchandarpur",
    "Sonakanda"
  ],
  "Cox's Bazar": [
    "Badarkali",
    "Chiringga",
    "Chiringga S.O",
    "Malumghat",
    "Coxs Bazar Sadar",
    "Eidga",
    "Zhilanja",
    "Gorakghat",
    "Kutubdia",
    "Ramu",
    "Hnila",
    "Teknaf",
    "St.Martin",
    "Ukhia"
  ],
  "Feni": [
    "Chhagalnaia",
    "Daraga Hat",
    "Maharajganj",
    "Puabashimulia",
    "Chhilonia",
    "Dagonbhuia",
    "Dagondhuia",
    "Dudmukha",
    "Rajapur",
    "Fazilpur",
    "Feni Sadar",
    "Laskarhat",
    "Sharshadie",
    "Fulgazi",
    "Pashurampur",
    "Munshirhat",
    "Shuarbazar",
    "Ahmadpur",
    "Sonagazi",
    "Kazirhat",
    "Motiganj"
  ],
  "Khagrachari": [
    "Diginala",
    "Khagrachari Sadar",
    "Laxmichhari",
    "Mahalchhari",
    "Manikchhari",
    "Matiranga",
    "Panchhari",
    "Ramghar Head Office"
  ],
  "Lakshmipur": [
    "Char Alexgander",
    "Hajirghat",
    "Ramgatirhat",
    "Amani Lakshimpur",
    "Lakshimpur Sadar",
    "Bhabaniganj",
    "Chandraganj",
    "Choupalli",
    "Dalal Bazar",
    "Duttapara",
    "Keramatganj",
    "Mandari",
    "Rupchara",
    "Alipur",
    "Ramganj",
    "Dolta",
    "Kanchanpur",
    "Naagmud",
    "Panpara",
    "Bhuabari",
    "Raypur",
    "Haydarganj",
    "Nagerdighirpar",
    "Rakhallia"
  ],
  "Noakhali": [
    "Basurhat",
    "Charhajari",
    "Alaiarpur",
    "Begumganj",
    "Amisha Para",
    "Banglabazar",
    "Bazra",
    "Bhabani Jibanpur",
    "Choumohani",
    "Dauti",
    "Durgapur",
    "Gopalpur",
    "Jamidar Hat",
    "Joyag",
    "Joynarayanpur",
    "Khalafat Bazar",
    "Khalishpur",
    "Maheshganj",
    "Mir Owarishpur",
    "Nadona",
    "Nandiapara",
    "Oachhekpur",
    "Rajganj",
    "Sonaimuri",
    "Tangirpar",
    "Thanar Hat",
    "Bansa Bazar",
    "Chatkhil",
    "Bodalcourt",
    "Dosh Gharia",
    "Karihati",
    "Khilpara",
    "Palla",
    "Rezzakpur",
    "Sahapur",
    "Sampara",
    "Shingbahura",
    "Solla",
    "Afazia",
    "Hatiya",
    "Tamoraddi",
    "Chaprashir Hat",
    "Noakhali Sadar",
    "Char Jabbar",
    "Charam Tua",
    "Din Monir Hat",
    "Kabirhat",
    "Khalifar Hat",
    "Mriddarhat",
    "Noakhali College",
    "Pak Kishoreganj",
    "Sonapur",
    "Beezbag",
    "Senbag",
    "Chatarpaia",
    "Kallyandi",
    "Kankirhat",
    "T.P. Lamua"
  ],
  "Rangamati": [
    "Barakal",
    "Bilaichhari",
    "Jarachhari",
    "Betbunia",
    "Kalampati",
    "Chandraghona",
    "kaptai",
    "Kaptai",
    "Kaptai Nuton Bazar",
    "Kaptai Project",
    "Longachh",
    "Marishya",
    "Nanichhar",
    "Naniachhar",
    "Rajsthali",
    "Rangamati Sadar"
  ],
  "Habiganj": [
    "Azmireeganj",
    "Bahubal",
    "Baniachang",
    "Jatrapasha",
    "Kadirganj",
    "Chandpurbagan",
    "Chunarughat",
    "Narapati",
    "Gopaya",
    "Hobiganj Sadar",
    "Shaestaganj",
    "Kalauk",
    "Lakhai",
    "Itakhola",
    "Madhabpur",
    "Saihamnagar",
    "Shahajibazar",
    "Digalbak",
    "Nabiganj",
    "Golduba",
    "Goplarbazar",
    "Inathganj"
  ],
  "Maulvibazar": [
    "Baralekha",
    "Dhakkhinbag",
    "Juri",
    "Purbashahabajpur",
    "Kamalganj",
    "Keramatnaga",
    "Munshibazar",
    "Patrakhola",
    "Shamsher Nagar",
    "Baramchal",
    "Kulaura",
    "Kajaldhara",
    "Karimpur",
    "Langla",
    "Prithimpasha",
    "Tillagaon",
    "Afrozganj",
    "Moulvibazar Sadar",
    "Barakapan",
    "Monumukh",
    "Rajnagar",
    "Kalighat",
    "Srimangal",
    "Khejurichhara",
    "Narain Chora",
    "Satgaon"
  ],
  "Sunamganj": [
    "Bishamsapur",
    "Bishamsarpur",
    "Chhatak",
    "Chhatak Cement Facto",
    "Chhatak Paper Mills",
    "Chourangi Bazar",
    "Gabindaganj",
    "Gabindaganj Natun Ba",
    "Islamabad",
    "jahidpur",
    "Khurma",
    "Moinpur",
    "Dhirai Chandpur",
    "Jagdal",
    "Duara bazar",
    "Ghungiar",
    "Atuajan",
    "Jagnnathpur",
    "Hasan Fatemapur",
    "Rasulganj",
    "Shiramsi",
    "Syedpur",
    "Sachna",
    "Pagla",
    "Sunamganj Sadar",
    "Patharia",
    "Tahirpur"
  ],
  "Sylhet": [
    "Balaganj",
    "Begumpur",
    "Brahman Shashon",
    "Gaharpur",
    "Goala Bazar",
    "Karua",
    "Kathal Khair",
    "Natun Bazar",
    "Omarpur",
    "Tajpur",
    "Bianibazar",
    "Churkai",
    "jaldup",
    "Kurar bazar",
    "Mathiura",
    "Salia bazar",
    "Bishwanath",
    "Dashghar",
    "Deokalas",
    "Doulathpur",
    "Singer kanch",
    "Fenchuganj",
    "Fenchuganj SareKarkh",
    "Chiknagul",
    "Goainhat",
    "Jaflong",
    "banigram",
    "Gopalganj",
    "Chandanpur",
    "Dakkhin Bhadashore",
    "Dhaka Dakkhin",
    "Gopalgannj",
    "Ranaping",
    "Jainthapur",
    "Jaintapur",
    "Ichhamati",
    "Jakiganj",
    "Chatulbazar",
    "Kanaighat",
    "Gachbari",
    "Manikganj",
    "Kompanyganj",
    "Birahimpur",
    "Sylhet Sadar",
    "Jalalabad",
    "Jalalabad Cantoment",
    "Kadamtali",
    "Kamalbazer",
    "Khadimnagar",
    "Lalbazar",
    "Mogla",
    "Ranga Hajiganj",
    "Shahajalal Science &",
    "Silam",
    "Sylhe Sadar",
    "Sylhet Biman Bondar",
    "Sylhet Cadet Col"
  ],
  "Bagerhat": [
    "Bagerhat Sadar",
    "P.C College",
    "Rangdia",
    "Chalna Ankorage",
    "Mongla Port",
    "Barabaria",
    "Chitalmari",
    "Bhanganpar Bazar",
    "Fakirhat",
    "Mansa",
    "Kachua",
    "Kachua UPO",
    "Sonarkola",
    "Charkulia",
    "Mollahat",
    "Dariala",
    "Kahalpur",
    "Nagarkandi",
    "Pak Gangni",
    "Morelganj",
    "Sannasi Bazar",
    "Telisatee",
    "Foylahat",
    "Rampal",
    "Gourambha",
    "Sonatunia",
    "Rayenda"
  ],
  "Chuadanga": [
    "Alamdanga",
    "Hardi",
    "Chuadanga Sadar",
    "Munshiganj",
    "Andulbaria",
    "Damurhuda",
    "Darshana",
    "Doulatganj"
  ],
  "Jashore": [
    "Bagharpara",
    "Gouranagar",
    "Chougachha",
    "Chaugachha",
    "Basundia",
    "Jessore Sadar",
    "Chanchra",
    "Churamankathi",
    "Jessore Airbach",
    "Jessore canttonment",
    "Jessore Upa-Shahar",
    "Rupdia",
    "Jhikargachha",
    "Keshobpur",
    "Keshabpur",
    "Monirampur",
    "Bhugilhat",
    "Noapara",
    "Rajghat",
    "Bag Achra",
    "Sarsa",
    "Benapole",
    "Jadabpur"
  ],
  "Jhenaidah": [
    "Harinakundu",
    "Jinaidaha Cadet College",
    "Jinaidaha Sadar",
    "Kotchandpur",
    "Maheshpur",
    "Hatbar Bazar",
    "Naldanga",
    "Kumiradaha",
    "Shailakupa"
  ],
  "Khulna": [
    "Alaipur",
    "Belphulia",
    "Rupsha",
    "Batiaghat",
    "Surkalee",
    "Bajua",
    "Chalna Bazar",
    "Dakup",
    "Nalian",
    "Chandni Mahal",
    "Digalia",
    "Gazirhat",
    "Ghoshghati",
    "Senhati",
    "Atra Shilpa Area",
    "Khulna Sadar",
    "BIT Khulna",
    "Doulatpur",
    "Jahanabad Canttonmen",
    "Khula Sadar",
    "Khulna G.P.O",
    "Khulna Shipyard",
    "Khulna University",
    "Siramani",
    "Sonali Jute Mills",
    "Amadee",
    "Madinabad",
    "Chandkhali",
    "Paikgachha",
    "Garaikhali",
    "Godaipur",
    "Kapilmoni",
    "Katipara",
    "Phultala",
    "Chuknagar",
    "Sajiara",
    "Ghonabanda",
    "Shahapur",
    "Pak Barasat",
    "Terakhada"
  ],
  "Kushtia": [
    "Allardarga",
    "Bheramara",
    "Ganges Bheramara",
    "Janipur",
    "Khoksa",
    "Kumarkhali",
    "Panti",
    "Islami University",
    "Kustia Sadar",
    "Jagati",
    "Kushtia Mohini",
    "Amla Sadarpur",
    "Mirpur",
    "Poradaha",
    "Khasmathurapur",
    "Rafayetpur",
    "Taragunia"
  ],
  "Magura": [
    "Arpara",
    "Magura Sadar",
    "Binodpur",
    "Mohammadpur",
    "Nahata",
    "Langalbadh",
    "Shripur",
    "Nachol"
  ],
  "Meherpur": [
    "Gangni",
    "Amjhupi",
    "Meherpur Sadar",
    "Mujib Nagar Complex"
  ],
  "Narail": [
    "Kalia",
    "Baradia",
    "Laxmipasha",
    "Itna",
    "Lohagora",
    "Naldi",
    "Mohajan",
    "Narail Sadar",
    "Ratanganj"
  ],
  "Satkhira": [
    "Ashashuni",
    "Baradal",
    "Debbhata",
    "Gurugram",
    "Chandanpur",
    "kalaroa",
    "Hamidpur",
    "Jhaudanga",
    "Khordo",
    "Murarikati",
    "Kaliganj UPO",
    "Nalta Mubaroknagar",
    "Ratanpur",
    "Buri Goalini",
    "Nakipur",
    "Gabura",
    "Habinagar",
    "Naobeki",
    "Noornagar",
    "Budhhat",
    "Satkhira Sadar",
    "Gunakar kati",
    "Satkhira Islamia Acc",
    "Patkelghata",
    "Taala"
  ]
}