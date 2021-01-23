
var heirarchy = [
    {
        "type": "link",
        "title": "ACCUEIL",
        "description": appName,
        "icon": "home",
        "urls": [iframSrc + homeSheet],
        "breadcrumbs": "",
        "showCurrentSelections": false
    },
    {
        "type": "parent",
        "title": "CARTES IDENTITES",
        "icon": "address-card",
        "links": [
            {
                "type": "child",
                "title": "Etablissements",
                "urls": [iframSrc + "b1b7010d-2b3d-4d88-8312-6baddb7601ae"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "Autorisations",
                "urls": [iframSrc + "1b2c7fc8-db59-4699-bb3a-c7b7246b7fd9"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "Unit&#233;s m&#233;dicales",
                "urls": [iframSrc + "12221e61-3ede-4583-859d-5620917b5f16"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "Unit&#233;s fonctionnelles",
                "urls": [iframSrc + "5caaa273-f990-4364-bf5f-0c18a177ff1f"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "Pathologies",
                "urls": [iframSrc + "5065fdb9-3197-48dd-9d59-f85b5a35b9b5"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            }
        ]
    },
    {
        "type": "parent",
        "title": "SYNTHESE",
        "icon": "chart-bar",
        "links": [
            {
                "type": "child",
                "title": "Vue d&#8217;ensemble",
                "urls": [iframSrc + "bf283f19-dc15-4920-b047-5b8f05d0c9ea"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "Activit&#233; mensuelle",
                "urls": [iframSrc + "5c604786-aef3-4020-a8b6-a1776751ece6"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "Evolution pluriannuelle",
                "urls": [iframSrc + "410c076b-a011-4fb9-892f-07568e5895f0"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            }
        ]
    },
    {
        "type": "parent",
        "title": "DIALOGUE GESTION",
        "icon": "users",
        "links": [
            {
                "type": "child",
                "title": "Vue d&#8217;ensemble",
                "urls": [iframSrc + "848e477f-c05d-45f2-bb9b-090760e67ecb"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "Activit&#233;",
                "urls": [iframSrc + "d3dc6e62-620d-4056-8c9c-879127ab5f5d"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "DMS",
                "urls": [iframSrc + "5b13ee11-b0b7-4dd8-bb2d-6fdc55e94527"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "DMS d&#233;taill&#233;e",
                "urls": [iframSrc + "302b9cf6-5568-4398-b3d9-fff213bd8997"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "Casemix",
                "urls": [iframSrc + "e8678803-a9a6-4536-9a11-15598ae39dca"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "Casemix d&#233;taill&#233;",
                "urls": [iframSrc + "9b840f53-e660-433c-98cb-015604dced46"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "CSARR",
                "urls": [iframSrc + "048564e6-cca2-45e7-ab1c-f5b88ca4b0f5"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "CSARR d&#233;taill&#233;",
                "urls": [iframSrc + "87d3bcc6-d568-4630-84fc-61244ca59a23"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "CSARR &#233;valuations",
                "urls": [iframSrc + "48326bfd-aa6a-4a6f-abc2-70227f4382c1"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "D&#233;pendances AVQ",
                "urls": [iframSrc + "3294f172-dcdc-4c25-baa4-21c3a0bc6280"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "S&#233;v&#233;rit&#233;s",
                "urls": [iframSrc + "347a1b18-4283-4239-ba08-eafa9e1b3b94"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            }
        ]
    },
    {
        "type": "parent",
        "title": "AUTRES ELEMENTS",
        "icon": "folder-open",
        "links": [
            {
                "type": "child",
                "title": "Mouvements",
                "urls": [iframSrc + "80c83b7b-0194-4c69-bd22-321bc28990e5"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "CCAM",
                "urls": [iframSrc + "886a04fe-6cda-43d6-bc8f-2b84a02a331d"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "Pr&#233;carit&#233;",
                "urls": [iframSrc + "299794e7-8241-485f-89e6-9bc57dcac555"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "Mol&#233;cules on&#233;reuses",
                "urls": [iframSrc + "00b93093-3b77-48ea-b2b2-de38e61b557d"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "Valorisation &#8364;",
                "urls": [iframSrc + "1c95348e-93df-45df-b838-0c52fb15029c"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            },
            {
                "type": "child",
                "title": "Provenance patients",
                "urls": [iframSrc + "769aca82-515f-4618-81df-71347938b11a"],
                "breadcrumbs": appName,
                "showCurrentSelections": true
            }
        ]
    }

];

var filters = [
    {
        name: "RHA CMD (Code - Libellé)",
        title: "Categories majeures",
        divId: "filter1"
    },
    {
        name: "Rattachement_RHA",
        title: "Rattachement GN",
        divId: "filter2"
    },
    {
        name: "RHA  GN code libellé",
        title: "Groupes Nosologiques",
        divId: "filter3"
    },
    {
        name: "RHA  RGME code libellé",
        title: "Racines de GME",
        divId: "filter4"
    },
    {
        name: "RHA  GME code libellé",
        title: "GME",
        divId: "filter5"
    },
    {
        name: "Libelle_intervenants_SSR",
        title: "Intervenants",
        divId: "filter6"
    },
    {
        name: "CARTO_nom_région",
        title: "Région",
        divId: "filter7"
    },
    {
        name: "CARTO_nom_département",
        title: "Département",
        divId: "filter8"
    },
    {
        name: "CARTO_nom_commune",
        title: "Commune",
        divId: "filter9"
    }
];