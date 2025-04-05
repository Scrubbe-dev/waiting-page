import { FaAws } from "react-icons/fa6";
import { FaMicrosoft } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { SiDatadog } from "react-icons/si";
import { SiSplunk } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { SiElasticcloud } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
export const integrationData = [
    {
        id: "0",
        title:"AWS",
        description:"Monitor CloudTrail, GuardDuty, and S3 security",
        icon:<FaAws  size={40}  />
    },
    {
        id: "1",
        title:"Azure",
        description:"Ingest Azure Sentinel and Azure Monitor data",
        icon:<FaMicrosoft  size={40}  />
    },
    {
        id: "2",
        title:"GCP",
        description:"Connect with Google Cloud Security Command Center",
        icon:<FaGoogle  size={40}  />
    },
    {
        id: "3",
        title:"Datadog",
        description:"Seamless integration with Datadog monitoring",
        icon:<SiDatadog  size={40}  />
    },
    {
        id: "4",
        title:"Splunk",
        description:"Two-way data exchange with Splunk",
        icon:<SiSplunk  size={40}  />
    },
    {
        id: "5",
        title:"CrowdStrike",
        description:"Endpoint detection and response",
        icon:<MdOutlineSecurity  size={40}  />
    },
    {
        id: "6",
        title:"Elastic",
        description:"Ingest and analyze Elasticsearch data",
        icon:<SiElasticcloud  size={40}  />
    },
    {
        id: "7",
        title:"Data Lake",
        description:"Connect to any S3 or Azure Data Lake",
        icon:<FaDatabase  size={40}  />
    }
]