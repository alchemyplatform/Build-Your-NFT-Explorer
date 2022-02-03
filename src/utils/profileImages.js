const URLs=[
    "https://lh3.googleusercontent.com/GZi0kFX6RCqXRg53dWuVBd6-HKE6nRDTBh0DdJ5CJ5gmEySQOpSmwBSbxge0oCHja4mrLSysFisxm6FRRgpBEbIfbhmyTPEni8PIxA=w600",
    "https://lh3.googleusercontent.com/n2WAa9wcFhYpPyBjiAR5zy8GZTsYeFelqgxu2WitNMklDcR_cUWWKpyOEjOvxiQb9GR8Uw7WerO-1n4OUIoEsXauMJB8qtmrt0HjuQ=w600",
    "https://lh3.googleusercontent.com/UoFV2HVC6fpBOC0ybX85Lus0DCunFPUENMjohCMoSSKEDbNCaYOtpCFKd4Bbbdf7P3aubU5ieEtAHYnesgadifOJUnQhxa6Nkhyz=w600",
    "https://lh3.googleusercontent.com/3GN1RPjmaarlwxVX6-VRpNZbNhitK6q_g74hLSOhmBcQJ3dpj85Fu5fLpEKNoPknVjSdMyjX3cx289T7LZDo-_MaIl8Io7xRnt7WQQ=w600",
    "https://lh3.googleusercontent.com/Zb7yslpCjC7GsRn7MM8CVZxmMcUVkqPob3f4p3c89FQ56B7FM6nwnP8zftDg0z-Q5JXlcJekvOFtUGvrCgaCCfdobcLmgLMf-p-I=w600",
    "https://lh3.googleusercontent.com/EAlfl42b_I4ZBmvBOuPwaEpN-w_zzCYFxxFTcfJdwllAox9dTkB6TPdVjQClRSfGXw2KMqRKeYK_6ZiSMrp-_zQ_0Bz9OjSuTlI0ww=w600",
    "https://lh3.googleusercontent.com/9WkSu8CP7gZjaEmUy8cpaKG3mK6ScHeEDvQf8driDoRxuxy4GPAs_W_Dn_DQascQSGDkdUL4cjmsnRrL6xN-NDp-s_RNwN5pxiCo=w600",
    "https://lh3.googleusercontent.com/I5qAqGk5anoCRcptamzw9c9_PWEci58YSLB-llcFZna1f5KWLZhIJQa_3l7LaIePj_KE-IHSdzbR8IIx9Na7k8lx7wyY3H3uTxkF-Q=w600",
    "https://lh3.googleusercontent.com/GZi0kFX6RCqXRg53dWuVBd6-HKE6nRDTBh0DdJ5CJ5gmEySQOpSmwBSbxge0oCHja4mrLSysFisxm6FRRgpBEbIfbhmyTPEni8PIxA=w600"

        
]

const image = URLs[[Math.floor(Math.random()*URLs.length)]]

const ProfileImage = ({width, rounded}) => {

    return (
        <img width={width} src={image} className={rounded ? "rounded-full" : "none"}></img>
    )

}

export default ProfileImage