const CasesInfo = [
    {
        name: "Fail2Ban",
        titleDescription: "",
        snowflake: "fail2ban",
        abbreviation: "f2b",
        articleHeader: "Creating a Fail2Ban solution using iptables",
        description: [
            `This was part of a graded assignment as part of the DCST1001 course at NTNU Trondheim, Norway. The program were to act as a homemade version of fail2ban where an IP address attempting to connect via SSH would be rejected/banned if it exceeded three failed attempts. The script would then automatically unban the IP address after 10 minutes of ban time had passed.`,
            `By utilizing iptables, which is a sort of firewall for Linux. These scripts would listen to incoming SHH requests and temporarily ban specific addresses.`,
            `This was written as an assignment for the course <a href='https://www.ntnu.no/studier/emner/DCST1001'>DCST1001</a> at NTNU, which is one of the first courses as part of the Bsc <a href='https://www.ntnu.no/studier/bdigsec'>Digital Infrastructure and Cyber Security</a>.`
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
            `The project revolved around finding an alternative solution to retrieving weather data from remote weather stations.`,
            `The program that we devoloped connected to a temperature sensor at Blindern in Oslo, NO. This script would retrieve an ohm value every 5 seconds, and then convert i into Celsius. To achieve this we made use of sockets as well as the threading library in Python 3 to make sure the script would run itself.`,
            `When the data had been collected, the data would then be uploaded to a database where further scripts would plot these data into a graph. This would then be uploaded to codepoint.no where a visitor could choose to filter which period of time you wanted to take a look at.`,
            `With this data, we were to report back to <a href='https://www.met.no/'>Meterologisk Institutt</a> with our findings. We concluded that the solution would be a viable option compared to the hardware solution that is used to day. The only exeption was the fact that our program were ran on a local computer on prem, and therefore did not have the up-time we hoped for.`
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
            `As part of the course <a href='https://www.ntnu.no/studier/emner/DCST1005'>DCST1005</a>, student were handed out an assignment where you were to create code to perform any kind of backup solution for an office.`,
            `I chose to go for an incremental backup where only data that has been modified since the previous full backup would be saved for each day. In this way it would decrease the amount of storage space one would need on a disk, if you were to store it locally.`,
            `Since I had problems with connecting to my client VM i were not able to run the scripts from the domain controller and affect any computers in the domain. Because of this I had to settle for a local solution which meant that all computers in the domain would run the program locally and store them in a zipped folder. A major problem with this was that the case stated that this should act as some way of protection against ransomeware. As all the files were stored on the same computer, this was not possible.`,
            `To come up with a bit of a "botchy" solution, I made it so that all the zipped folders were set to readOnly. This could of course be overwritten with an elevated executive role in a shell, but it would at least reduce the risk a tiny amount.`
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
            `I was tired of always of how messy my downloads folder was. To solve this, I decided to make a solution to the problem.`,
            `The script uses some pre-set folders to organize the files with their respective file extensions. The program is written to create any folder that does not exist in your download folder. When these folders have been accounted for, the script will then go through all files and move them into their intended directories.`,
            `To make it a bit easier for the user to see what has been changed, this version of the script has an easier GUI which displays the actions in a simpler manner than its predecessor. Another improvent for CleanDirV2 is that it is written to make it more dynamic, and therefore easier to improve or rewrite if needed`
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
            `As part of an assignment in the course <a href='https://www.ntnu.no/studier/emner/DCST1005'>DCST1005</a>, my group was tasked with creating an OU structure for a startup company. The different departments and their computers are to be separated, and their respective groups should have access to what they need. I.E some employees should have access with keycards, but ALL employees should be able to use the printers.`
        ],
        sourceLink: "https://gitlab.stud.idi.ntnu.no/ianpe/dcst1005-assignment2",
        isHighlighted: false
    },
    {
        name: "Homophonic Substitution Cipher",
        titleDescription: "",
        snowflake: "homophonic-substitution-cipher",
        abbreviation: "hsc",
        articleHeader: "Encrypting text with respects to letter frequency",
        description: [
            `After wathcing a documentary about the Zodiac killer of San Fransisco, I was inspired to try creating a similar type of encrypting text. The method the Zodiac used is called a <i>"Homophonic Substitution Cipher"</i>, and it takes character frequency into consideration when encrypting the plain text. Even though this script utilizes the same type of encryption technique as the Zodiac ciphers, it is still bound to ASCII characters as of now.`
        ],
        sourceLink: "https://github.com/ipeglin/Javascript/tree/master/Homophonic%20Substitution%20Cipher",
        isHighlighted: false
    },
    {
        name: "Directory Visualizer",
        titleDescription: "",
        snowflake: "directory-visualizer",
        abbreviation: "dv",
        articleHeader: "Visually displaying content recursively in the computer's directory",
        description: [
            ``
        ],
        sourceLink: "https://github.com/ipeglin/directory-visualiser",
        isHighlighted: false
    },
    {
        name: "",
        titleDescription: "",
        snowflake: "",
        abbreviation: "",
        articleHeader: "",
        description: [
            ``
        ],
        sourceLink: "",
        isHighlighted: false
    }
];

export default CasesInfo;