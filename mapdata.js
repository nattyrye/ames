var simplemaps_usmap_mapdata={
  main_settings: {
    //General settings
    width: "1000", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",
    
    //State defaults
    state_description: "State Description",
    state_color: "#5085a5",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#575757",
    location_opacity: ".8",
    location_hover_opacity: 1,
    location_url: "",
    location_size: "15",
    location_type: "circle",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "White",
    label_hover_color: "White",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    link_text: "View Website",
    location_image_url: "",
    manual_zoom: ""
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "yes",
      inactive: "default",
      zoomable: "default"
    },
    AK: {
      name: "Alaska",
      hide: "yes"
    },
    FL: {
      name: "Florida",
      inactive: "no"
    },
    NH: {
      name: "New Hampshire"
    },
    VT: {
      name: "Vermont"
    },
    ME: {
      name: "Maine"
    },
    RI: {
      name: "Rhode Island"
    },
    NY: {
      name: "New York"
    },
    PA: {
      name: "Pennsylvania"
    },
    NJ: {
      name: "New Jersey"
    },
    DE: {
      name: "Delaware"
    },
    MD: {
      name: "Maryland"
    },
    VA: {
      name: "Virginia"
    },
    WV: {
      name: "West Virginia"
    },
    OH: {
      name: "Ohio"
    },
    IN: {
      name: "Indiana"
    },
    IL: {
      name: "Illinois"
    },
    CT: {
      name: "Connecticut"
    },
    WI: {
      name: "Wisconsin"
    },
    NC: {
      name: "North Carolina"
    },
    DC: {
      name: "District of Columbia"
    },
    MA: {
      name: "Massachusetts"
    },
    TN: {
      name: "Tennessee"
    },
    AR: {
      name: "Arkansas"
    },
    MO: {
      name: "Missouri"
    },
    GA: {
      name: "Georgia"
    },
    SC: {
      name: "South Carolina"
    },
    KY: {
      name: "Kentucky",
      zoomable: "no"
    },
    AL: {
      name: "Alabama"
    },
    LA: {
      name: "Louisiana"
    },
    MS: {
      name: "Mississippi"
    },
    IA: {
      name: "Iowa"
    },
    MN: {
      name: "Minnesota"
    },
    OK: {
      name: "Oklahoma"
    },
    TX: {
      name: "Texas"
    },
    NM: {
      name: "New Mexico"
    },
    KS: {
      name: "Kansas"
    },
    NE: {
      name: "Nebraska"
    },
    SD: {
      name: "South Dakota"
    },
    ND: {
      name: "North Dakota"
    },
    WY: {
      name: "Wyoming"
    },
    MT: {
      name: "Montana"
    },
    CO: {
      name: "Colorado"
    },
    UT: {
      name: "Utah"
    },
    AZ: {
      name: "Arizona"
    },
    NV: {
      name: "Nevada"
    },
    OR: {
      name: "Oregon"
    },
    WA: {
      name: "Washington"
    },
    CA: {
      name: "California"
    },
    MI: {
      name: "Michigan"
    },
    ID: {
      name: "Idaho"
    },
    GU: {
      name: "Guam",
      hide: "yes"
    },
    VI: {
      name: "Virgin Islands",
      hide: "yes"
    },
    PR: {
      name: "Puerto Rico",
      hide: "yes"
    },
    MP: {
      name: "Northern Mariana Islands",
      hide: "yes"
    },
    AS: {
      name: "American Samoa",
      hide: "yes"
    }
  },
  locations: {
    "0": {
      lat: 39.74,
      lng: -104.992,
      name: "Denver, CO",
      color: "Red",
      description: "2015 BNSF - Denver Coal Tracks Extension - Project Cost:  $.84 Million"
    },
    "1": {
      lat: 42.76,
      lng: -105.383,
      name: "Douglas, WY",
      color: "Red",
      description: "1998 BNSF - Third Main-CN&W Jct. to Walker  - Project Cost: $6.10 Million",
      url: "default",
      size: "default",
      type: "default",
      image_url: "http://flaglane.com/download/american-flag/american-flag-graphic.png",
      opacity: "default"
    },
    "2": {
      lat: 34.602,
      lng: -105.204,
      name: "Vaughn, NM",
      color: "Red",
      description: "1998 BNSF - 2nd Mainline-Largo to Joffrey - Project Cost: $8 Million"
    },
    "3": {
      lat: 40.865,
      lng: -97.592,
      name: "York, NE",
      color: "Red",
      description: "1998 BNSF - Utica to York - Project Cost: $4.57 Million"
    },
    "4": {
      lat: 41.009,
      lng: -95.233,
      name: "Red Oak, IA",
      color: "Red",
      description: "1998 BNSF - Red Oak - Project Cost: $4.57 Million"
    },
    "5": {
      lat: 44.772,
      lng: -107.237,
      name: "East Wolf, WY",
      color: "Green",
      description: "1999 UPRR - 2nd Mainline-Braun to Wolfe - Project Cost:  $2 Million"
    },
    "6": {
      lat: 45.032,
      lng: -93.337,
      name: "Robbinsdale, MN",
      description: "2002 CP - CP RR Bridge - Project Cost: $.60 Million",
      color: "Blue"
    },
    "7": {
      lat: 35.692,
      lng: -100.639,
      name: "Miami, TX",
      description: "2003 BNSF - Canadian to Lora - Project Cost : $15.5 Million",
      color: "Red"
    },
    "8": {
      lat: 39.919,
      lng: -104.867,
      name: "Henderson, CO",
      color: "Green",
      description: "2015 UPRR - Rolla Automative Facility - Project Cost: $1.3 Million"
    },
    "9": {
      lat: 36.434,
      lng: -99.399,
      name: "Woodward, OK",
      description: "2003 BNSF - Curtis to Woodward - Project Cost: $9 Million",
      color: "Red"
    },
    "10": {
      lat: 42.22,
      lng: -103.086,
      name: "Box Butte, NE",
      description: "2003 BNSF - Letan to Bonner - Project Cost: $.84 Million",
      color: "Red"
    },
    "11": {
      lat: 40.76,
      lng: -111.888,
      name: "Salt Lake City, UT",
      color: "Red",
      description: "2004 BNSF - Salt Lake City Intermodal - Project Cost: $45.6 Million"
    },
    "12": {
      lat: 35.207,
      lng: -101.834,
      name: "Amarillo, TX",
      color: "Red",
      description: "2004 BNSF - 3rd Mainline-Amarillo - Project Cost: $2.07 Million"
    },
    "13": {
      lat: 31.342,
      lng: -93.848,
      name: "Hemphill, TX",
      color: "Red",
      description: "2004 BNSF - US 60 S. Abutment Fill - Project Cost: $ .30 Million"
    },
    "14": {
      lat: 36.192,
      lng: -99.935,
      name: "Goodwin, OK",
      color: "Red",
      description: "2005 BNSF - Shattuck to Goodwin - Project Cost: $6.04 Million"
    },
    "15": {
      lat: 36.276,
      lng: -99.882,
      name: "Shattuck, OK",
      color: "Red",
      description: "2004 BNSF - Tangier to Shattuck - Project Cost: $10.1 Million"
    },
    "16": {
      lat: 36.42,
      lng: -99.534,
      name: "Tangier, OK",
      color: "Red",
      description: "2004 BNSF - Woodward to Tangier - Project Cost: $11.5 Million"
    },
    "17": {
      lat: 37.192,
      lng: -98.076,
      name: "Harper County, KS",
      color: "Red",
      description: "2005 BNSF - Milan to Attica - Project Cost: $22.3 Million"
    },
    "18": {
      lat: 36.585,
      lng: -98.88,
      name: "Waynoka, OK",
      color: "Red",
      description: "2005 BNSF - Waynoka to Heman - Project Cost: $3.84 Million"
    },
    "19": {
      lat: 41.037,
      lng: -96.098,
      name: "Cedar Creek, NE",
      color: "Red",
      description: "2005 BNSF - Cedar Creek to Cullom - Project Cost: $3.04 Million"
    },
    "20": {
      lat: 37.241,
      lng: -98.226,
      name: "Attica, KS",
      color: "Red",
      description: "2005 BNSF - Attica to Kiowa - Project Cost: $15.32 Million"
    },
    "21": {
      lat: 35.574,
      lng: -90.663,
      name: "Poinsett County, AR",
      color: "Red",
      description: "2005 BNSF - Marked Tree Siding Extension - Project Cost: $4.09 Million"
    },
    "22": {
      lat: 35.243,
      lng: -90.456,
      name: "Crittenden, AR",
      color: "Red",
      description: "2005 BNSF - Critco Capacity Improvement - Project Cost: $2.76 Million"
    },
    "23": {
      lat: 43.761,
      lng: -105.486,
      name: "Wright, WY",
      color: "Red",
      description: "2006 BNSF - Caballo Junction - Project Cost: $21.75 Million"
    },
    "24": {
      lat: 44.279,
      lng: -105.18,
      name: "Rozet, WY",
      color: "Red",
      description: "2006 BNSF - Donkey Creek - Project Cost: $11.89 Million"
    },
    "25": {
      lat: 41.394,
      lng: -99.726,
      name: "Custer County, NE",
      color: "Red",
      description: "2006 BNSF - Mason City to Berwyn - Project Cost: $8.02 Million"
    },
    "26": {
      lat: 41.665,
      lng: -103.1,
      name: "Bridgeport Morill, NE",
      color: "Red",
      description: "2006 BNSF - Angora to Northport - Project Cost: $9.91 Million"
    },
    "27": {
      lat: 41.039,
      lng: -96.368,
      name: "Ashland, NE",
      color: "Red",
      description: "2006 BNSF - South Bend to Ashland - Project Cost: $13.41 Million"
    },
    "28": {
      lat: 38.884,
      lng: -94.822,
      name: "Johnson County, KS",
      description: "2006 Olathe - Grade Separation - Project Cost: $26.84 Million"
    },
    "29": {
      lat: 37.334,
      lng: -97.34,
      name: "Cicero, KS",
      color: "Red",
      description: "2006 BNSF - Mulvane to Cicero - Project Cost: $10.43 Million"
    },
    "30": {
      lat: 35.843,
      lng: -86.343,
      name: "Memphis, TN",
      color: "Red",
      description: "2007 BNSF - Memphis Intermodal - Project Cost: $32.41 Million"
    },
    "31": {
      lat: 41.527,
      lng: -99.811,
      name: "Stuart, NE",
      color: "Red",
      description: "2007 BNSF - Enterprise to Stuart - Project Cost: $5.42 Million"
    },
    "32": {
      lat: 34.105,
      lng: -117.294,
      name: "San Bernardino, CA",
      color: "Red",
      description: "2007 BNSF - Cajon Pass, Keenbrook to Summit - Project Cost: $48.68 Million"
    },
    "33": {
      lat: 32.222,
      lng: -110.97,
      name: "Tucson, AZ",
      color: "Green",
      description: "2007 UPRR - Sunset Route, Estrella to Stockham - Project Cost: $105 Million"
    },
    "34": {
      lat: 34.798,
      lng: -106.701,
      name: "Valencia, NM",
      color: "Red",
      description: "2008 BNSF - Abo Canyon - Project Cost: $45.54 Million"
    },
    "35": {
      lat: 45.937,
      lng: -108.274,
      name: "Yellowstone, MT",
      description: "2008 GRG - Bull Mountain Rail Spur D-B - Project Cost: $103.65 Million"
    },
    "36": {
      lat: 35.389,
      lng: -120.44,
      name: "San Luis Obispo, CO",
      color: "Green",
      description: "2015 UPRR - Caliente Mountain - Project Cost: $2.6 Million"
    },
    "37": {
      lat: 40.836,
      lng: -115.768,
      name: "Elko, NV",
      description: "2008 UPRR - Bridge Replacement - Project Cost: $.37 Million",
      color: "Green"
    },
    "38": {
      lat: 40.812,
      lng: -91.101,
      name: "Burlington, IA",
      description: "2009 BNSF - Swing Span Replacement B 204.66 - Project Cost: $73 Million",
      color: "Red"
    },
    "40": {
      lat: 41.527,
      lng: -99.811,
      name: "Blaire, NE",
      description: "2010 UPRR - Blair to Kennard - Project Cost: $7.07 Million",
      color: "Green"
    },
    "41": {
      lat: 41.839,
      lng: -90.192,
      name: "Clinton, IA",
      color: "Green",
      description: "2010 UPRR - Bridge Rebuild over Mississippi River - Project Cost: $3 Million"
    },
    "42": {
      lat: 39.74,
      lng: -104.992,
      name: "Eagle, CO",
      description: "2010 RTD - Eagle P3 D-B - Project Cost: $993.2 Million"
    },
    "43": {
      lat: 40.107,
      lng: -104.52,
      name: "Keenesburg, CO",
      description: "2010 BNSF - Keenesburg Siphon - Project Cost: $.38 Million",
      color: "Red"
    },
    "44": {
      lat: 41.019,
      lng: -95.801,
      name: "Pacific Junction, IA",
      description: "2011 BNSF - Emergency Levee Construction - Project Cost: $3.4 Million",
      color: "Red"
    },
    "45": {
      lat: 31.446,
      lng: -106.09,
      name: "Tornillo, TX",
      color: "Green",
      description: "2011 UPRR - Valentine Subdivision-El Paso - Project Cost: $.63 Million"
    },
    "46": {
      lat: 48.236,
      lng: -101.296,
      name: "Minot, ND",
      description: "2011 BNSF - Gavin Yard - Project Cost: $5.4 Million",
      color: "Red"
    },
    "47": {
      lat: 48.677,
      lng: -102.083,
      name: "Kenmare, ND",
      description: "2011 CP - Emergency Repair - Project Cost: $.53 Million",
      color: "Blue"
    },
    "48": {
      lat: 31.861,
      lng: -106.689,
      name: "Strauss, NM",
      description: "2011 UPRR - Strauss Fueling - Project Cost: $62.6 Million",
      color: "Green"
    },
    "49": {
      lat: 39.452,
      lng: -94.343,
      name: "Holt, MO",
      description: "2011 BNSF - Fortescue Emergency Assistance - Project Cost: $45.84 Million",
      color: "Red"
    },
    "50": {
      lat: 39.304,
      lng: -96.055,
      name: "Emmett, KS",
      description: "2011 UPRR - BR 94.25 Emergency Replacement - Project Cost: $1.85 Million",
      color: "Green"
    },
    "51": {
      lat: 39.561,
      lng: -95.128,
      name: "Atchison, KS",
      description: "2011 UPRR - Bridge 321.99 - Project Cost: $.4 Million",
      color: "Green"
    },
    "52": {
      lat: 41.019,
      lng: -95.801,
      name: "Pacific Junction, IA",
      description: "2011 BNSF - Pac Junction Levee Removal - Project Cost: $4.74 Million",
      color: "Red"
    },
    "53": {
      lat: 39.739,
      lng: -104.992,
      name: "Denver, CO",
      description: "2011 BNSF - Denver Yard Pole Foundation - Project Cost: $ .3 Million",
      color: "Purple"
    },
    "54": {
      lat: 33.241,
      lng: -115.519,
      name: "City of Niland, CA",
      description: "2011 UPRR - Sunset Route-Wister to Iris - Project Cost: $25.8 Million",
      color: "Green"
    },
    "55": {
      lat: 32.834,
      lng: -109.708,
      name: "Safford, AZ",
      description: "2011 GW - AZ Bridge Repair - Project Cost: $.09 Million"
    },
    "56": {
      lat: 33.037,
      lng: -109.966,
      name: "Fort Thomas, AZ",
      description: "2011 AE&IP - Railway Bridge Repair - Project Cost: $.38 Million"
    },
    "57": {
      lat: 33.316,
      lng: -110.453,
      name: "Peridot, AZ",
      description: "2011 AE&IP - Railway Bridge Repair - $.09 Million"
    },
    "58": {
      lat: 31.759,
      lng: -106.487,
      name: "El Paso, TX",
      description: "2012 UPRR - Overhead 968.50 Pier Protection Wall -",
      color: "Green"
    },
    "59": {
      lat: 31.456,
      lng: -105.386,
      name: "Hudspeth County, TX",
      description: "2012 UPRR - BR713.58 Replacement - Project Cost: $.4 Million",
      color: "Green"
    },
    "60": {
      lat: 48.264,
      lng: -99.198,
      name: "Churchs Ferry, ND",
      description: "2012 BNSF - Churchs Ferry Emergency Work - Project Cost: $.09 Million",
      color: "Red"
    },
    "61": {
      lat: 40.87,
      lng: -98.468,
      name: "Alda, NE",
      description: "2012 UPRR - Alda MP158 Bridge Repair - Project Cost: $.32 Million",
      color: "Green"
    },
    "62": {
      lat: 41.011,
      lng: -95.886,
      name: "Plattsmouth, NE",
      description: "2012 BNSF - Plattsmouth Bridge 3.8 - Project Cost: $36.43 Million",
      color: "Red"
    },
    "63": {
      lat: 41.556,
      lng: -95.893,
      name: "Missouri Valley, IA",
      description: "2012 UPRR - California Junction to Missouri River - Project Cost: $7 Million",
      color: "Green"
    },
    "64": {
      lat: 41.033,
      lng: -95.621,
      name: "Mills, IA",
      description: "2012 BNSF - Pac Junction Bridges - Project Cost: $2 Million",
      color: "Red"
    },
    "65": {
      lat: 44.767,
      lng: -115.566,
      name: "Missouri Valley, CO",
      description: "2012 UPRR - Denver Intermodal - Project Cost: $8.4 Million",
      color: "Green"
    },
    "66": {
      lat: 39.617,
      lng: -105.015,
      name: "Littleton, CO",
      description: "2008 BNSF - Emergency Derailment Cleanup - Project Cost: $.44 Million |||2009 BNSF - Derailment Cleanup Assistance - Project Cost: $.12 Million ||| 2013 BNSF - Big Lift Auto Facility - Project Cost: $6.93 Million",
      color: "Red"
    },
    "67": {
      lat: 34.053,
      lng: -118.245,
      name: "Los Angeles, CA",
      description: "2014 RCT&L - Clay Street Grade Separation - Project Cost: $15.8 Million"
    },
    "68": {
      lat: 44.153,
      lng: -103.309,
      name: "Black Hawk, SD",
      description: "2014 RCPE RR - Bridge 106.80 Replacement - Project Cost: $.5 Million"
    },
    "70": {
      lat: 39.74,
      lng: -104.992,
      name: "Clear Creek, CO",
      description: "2014 BNSF - Bridge 4.42 Replacement - Project Cost: $2.9 Million",
      color: "Red"
    },
    "71": {
      lat: 32.778,
      lng: -96.795,
      name: "Dallas, TX",
      description: "2014 UPRR - Mesquite Terminal Expansion D-B - Project Cost: $82.7 Million",
      color: "Green"
    }
  },
  labels: {
    HI: {
      color: "default",
      hover_color: "default",
      font_family: "default",
      pill: "yes",
      width: "default"
    }
  },
  regions: {
    "0": {
      states: [
        "TX",
        "NM",
        "AZ",
        "OK"
      ],
      name: "Southwest",
      zoomable: "yes",
      color: "#b1b6c9"
    },
    "1": {
      states: [
        "OR",
        "CA",
        "WA"
      ],
      name: "Pacific",
      color: "#c6a4a3"
    },
    "2": {
      states: [
        "MT",
        "ID",
        "NV",
        "UT",
        "WY",
        "CO"
      ],
      name: "Rocky Mountains",
      color: "#fcd054"
    },
    "3": {
      states: [
        "ND",
        "SD",
        "NE",
        "KS",
        "MN",
        "IA",
        "MO",
        "IL",
        "WI",
        "IN",
        "OH",
        "MI"
      ],
      name: "Midwest",
      color: "#2e8691"
    },
    "4": {
      states: [
        "PA",
        "NY",
        "NJ",
        "VT",
        "NH",
        "MA",
        "ME",
        "CT",
        "RI"
      ],
      name: "Northeast",
      color: "#7f8778"
    },
    "5": {
      states: [
        "LA",
        "AR",
        "MS",
        "AL",
        "GA",
        "FL",
        "TN",
        "KY",
        "WV",
        "VA",
        "NC",
        "SC",
        "MD",
        "DE",
        "DC"
      ],
      name: "Southeast",
      color: "#8fc1e3"
    }
  }
};