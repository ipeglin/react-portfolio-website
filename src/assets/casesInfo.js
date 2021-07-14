const CasesInfo = [
    {
        name: "Fail2Ban",
        titleDescription: "",
        snowflake: "fail2ban",
        abbreviation: "f2b",
        articleHeader: "Creating a Fail2Ban solution using iptables",
        description: [
            ""
        ],
        sourceLink: "https://github.com/ipeglin/DCST1001",
        isHighlighted: true
    },
    {
        name: "Meteorologisk Institutt",
        titleDescription: "",
        snowflake: "meteorologisk-institutt",
        abbreviation: "mi",
        articleHeader: "Retreval of Weather Data",
        description: [
            "The project revolved around finding an alternative solution to retrieving weather data from remote weather stations.",
            "The program that we devoloped connected to a temperature sensor at Blindern in Oslo, NO. This script would retrieve an ohm value every 5 seconds, and then convert i into Celsius. To achieve this we made use of sockets as well as the threading library in Python 3 to make sure the script would run itself.",
            "When the data had been collected, the data would then be uploaded to a database where further scripts would plot these data into a graph. This would then be uploaded to codepoint.no where a visitor could choose to filter which period of time you wanted to take a look at.",
            "With this data, we were to report back to <a href='https://www.met.no/'>Meterologisk Institutt</a> with our findings. We concluded that the solution would be a viable option compared to the hardware solution that is used to day. The only exeption was the fact that our program were ran on a local computer on prem, and therefore did not have the up-time we hoped for."
        ],
        sourceLink: "https://github.com/mathiashelseth/MetInstitutt",
        isHighlighted: true
    },
    {
        name: "Incremental Backup",
        titleDescription: "",
        snowflake: "incremental-backup",
        abbreviation: "ib",
        articleHeader: "Incremetal backup solution running from Domain Controller",
        description: [
            ""
        ],
        sourceLink: "https://gitlab.com/ipeglin/dcst1005-assignment1",
        isHighlighted: true
    },
    {
        name: "CleanDirV2",
        titleDescription: "",
        snowflake: "cleandir-v2",
        abbreviation: "clndirv2",
        articleHeader: "Automizing sorting of download folder",
        description: [
            "I was tired of always of how messy my downloads folder was. To solve this, I decided to make a solution to the problem.",
            "The script uses some pre-set folders to organize the files with their respective file extensions. The program is written to create any folder that does not exist in your download folder. When these folders have been accounted for, the script will then go through all files and move them into their intended directories.",
            "To make it a bit easier for the user to see what has been changed, this version of the script has an easier GUI which displays the actions in a simpler manner than its predecessor. Another improvent for CleanDirV2 is that it is written to make it more dynamic, and therefore easier to improve or rewrite if needed"
        ],
        sourceLink: "https://github.com/ipeglin/Python/blob/master/cleanDirV2.py",
        isHighlighted: true
    },
    {
        name: "Active Directory OU Structure",
        titleDescription: "",
        snowflake: "ad-structure",
        abbreviation: "ad-ou",
        articleHeader: "Creating an AD OU Structure intended for an office",
        description: [
            ""
        ],
        sourceLink: "https://gitlab.stud.idi.ntnu.no/ianpe/dcst1005-assignment2",
        isHighlighted: false
    },
    {
        name: "NEW",
        titleDescription: "",
        snowflake: "NEW-link",
        abbreviation: "new",
        articleHeader: "",
        description: [
            ""
        ],
        sourceLink: "",
        isHighlighted: false
    },
    {
        name: "NEW",
        titleDescription: "",
        snowflake: "NEW-link",
        abbreviation: "new",
        articleHeader: "",
        description: [
            ""
        ],
        sourceLink: "",
        isHighlighted: false
    },
    {
        name: "NEW",
        titleDescription: "",
        snowflake: "NEW-link",
        abbreviation: "new",
        articleHeader: "",
        description: [
            ""
        ],
        sourceLink: "",
        isHighlighted: false
    }
];

export default CasesInfo;