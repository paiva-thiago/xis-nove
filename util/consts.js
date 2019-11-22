let dados = {
    "logoUrl":"img/pmsbc.png",
    "toolbar":[
        {
            "ico":"fab fa-gitlab",
            "url":"http://git.pmsbc.gov.br/"
        },
        {
            "ico":"fab fa-github",
            "url":"http://www.github.com/"
        },
        {
            "ico":"fab fa-trello",
            "url":"http://www.trello.com/"
        },
        {
            "ico":"fas fa-envelope-open",
            "url":"http://www.gmail.com/"
        }
    ],        
    "sys": {},
    "etc" : {
        "titulo" : "Etc.",
        "categs":[
            {
                "nome":"Sites - PMSBC",
                "links":[
                    {
                        "tit" : "Webmail",
                        "url" : "http://webmail.saobernardo.sp.gov.br/"
                    },
                    {
                        "tit" : "Redmine",
                        "url" : "http://redmine.pmsbc.gov.br/"
                    },
                    {
                        "tit" : "GSTI",
                        "url" : "http://gsti/"
                    },
                    {
                        "tit" : "Telefonia",
                        "url" : "http://telefonia.pmsbc.gov.br/"
                    }
                ]
            },
            {
                "nome":"Utilitários",
                "links":[
                    {
                        "tit" : "SIAM - Máquina Local",
                        "url" : "http://localhost:8082/SIAM/servlet/InitSession?sys=SIAM&user=SF&pass=9jSB4%2BcXP2M%3D&stn=10.1.2.58&init=yes&usertype=ADMIN"
                    },
                    {
                        "tit" : "Markdown to Textile",
                        "url" : "https://pandoc.org/try/"
                    },
                    {
                        "tit" : "Dillinger",
                        "url" : "https://dillinger.io/"
                    },
                    {
                        "tit" : "StackEdit",
                        "url" : "https://stackedit.io/"
                    },
                    {
                        "tit" : "Tables Generator",
                        "url" : "https://www.tablesgenerator.com/text_tables"
                    },
                    {
                        "tit" : "Table Styler",
                        "url" : "https://divtable.com/table-styler/"
                    }
                ]
            },
            {
                "nome":"Help!",
                "links":[
                    {
                        "tit" : "Atalhos VSCode",
                        "url" : "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf"
                    },
                    {
                        "tit" : "StackOverFlow",
                        "url" : "http://stackoverflow.com/"
                    },
                    {
                        "tit" : "GUJ",
                        "url" : "http://guj.com.br/"
                    },
                    {
                        "tit" : "Thymeleaf",
                        "url" : "https://www.thymeleaf.org/doc/tutorials/2.1/thymeleafspring.html"
                    }
                ]
            }
        ]
    }
}

const msbc = {
    "titulo": "SIGA (ORCOM/SIAM)",
    "ambientes": [
        {
            "nome" : "Produção",
            "local"  : "sigapmsbc",
            "obs"  : "SF4 (ORCOM) SF (SIAM)",
            "classColor" : "azl"
        },
        {
            "nome" : "Homologação",
            "local"  : "texas-homologa",
            "obs"  : "SF4 (ORCOM) SF (SIAM)",
            "classColor" : "ver"
        },
        {
            "nome" : "Desenvolvimento",
            "local"  : "dti-sigadev-01",
            "obs"  : "SF4 (ORCOM) SF (SIAM)",
            "classColor" : "lar"
        }            
    ]        
}

const home = {
    "titulo" : "Home Sweet Home",
    "ambientes":[
        {
            "nome" : "Twitter",
            "local"  : "twitter.com",
            "obs"  : "twitter",
            "classColor" : "azl"
        },
        {
            "nome" : "Github",
            "local"  : "github.com",
            "obs"  : "github",
            "classColor" : "prt"
        },
        {
            "nome" : "Dev",
            "local"  : "dev.com",
            "obs"  : "dev",
            "classColor" : "ver"
        }
]
}

const loadData = (atWork)=>{
    dados.sys = (atWork ? msbc : home )
    return dados
}

module.exports={loadData}