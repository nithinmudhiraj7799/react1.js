

export const New=()=>{
  const Teams=[
    {
      Team:"srh",
      players:["cummins","head","klassen"],
      won:5,
       logo:"https://ssl.gstatic.com/onebox/media/sports/logos/G9q07ZXPVbPkXOagStz3Yw_48x48.png"
    },
    {
      Team:"csk",
      players:["dhoni","jadeja","ruturaj"],
      won:5,
      logo:"https://ssl.gstatic.com/onebox/media/sports/logos/exZiFUT_GXScTyr358t7SQ_48x48.png"

    },
    {
      Team:"mi",
      players:["rohit","hardik","tilak varma"],
      won:5,
      logo:"https://ssl.gstatic.com/onebox/media/sports/logos/JTre94vh6WJeLmIL-Dfc1g_48x48.png"

    },
    {
      Team:"rcb",
      players:["kohli","maxwell","siraj"],
      won:1,
      logo:"https://ssl.gstatic.com/onebox/media/sports/logos/f958HPOsI1ugsHmwc4piCw_48x48.png"
    },
    {
      Team:"punjab",
      players:["dhawan","jitesh","bairstow"],
      won:1,
      logo:"https://ssl.gstatic.com/onebox/media/sports/logos/HxbhoKfAgDZogey6S9E4bA_48x48.png"
    },
    {
      Team:"dc",
      players:["warner","rishab pant","kuldeep"],
      won:1,
      logo:"https://ssl.gstatic.com/onebox/media/sports/logos/TjudW-BaNE2HcD_6cOWC7Q_48x48.png"
    },
    

  ];
  function filterData(Teams){
    const newTeams=Teams.filter(e=>e.won>=2);
    return newTeams;
  }
return(
  <div>
    {
      filterData(Teams).map((e)=>{
        return(
          <div>
            <h2>
              {e.Team}
            </h2>
            <img src={e.logo}/>
            {
              e.players.map((k)=>{
                return(
                  <div>
                    <h1>{ k }</h1>
                    
                    </div>
                    
                )
              })
            }
            </div>
        )
      })
    }
  </div>
)
}