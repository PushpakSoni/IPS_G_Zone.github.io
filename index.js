const scoreInfo = async()=>{
    const response = await fetch("https://ipsgwalior.org/scoreboard/screenscore.php")

    if(!response.ok){
        throw new Error ('user ....')
    }

    //parse jsin 

    const userData =await response.json()
    console.log(userData)
    // console.log(userData[0].teamnameA)

}

scoreInfo();

