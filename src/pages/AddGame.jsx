import { useState } from "react";
import { Form, redirect } from "react-router-dom";
/**
 *
 * @param {{request: Request}} param0
 */
export const addGameAction = async ({ request }) => {
    const formdata = await request.formData();
    const json = {
      hometeam: formdata.get("hometeam"),
      awayteam: formdata.get("awayteam"),
      gametime: formdata.get("gametime"),
    };
    console.log(json, "server json");
  
    return redirect("/game/33");
  };
  
function AddGame() {
    const [homeTeam , setHomeTeam] = useState("");
    const [awayTeam , setAwayTeam] = useState("");
    const [gameTime , setGameTime] = useState("");
    const onSubmit = () => {
        let reqBody = {homeTeam , awayTeam , gameTime}
        console.log(`reqBody`,reqBody);
    }
  return (
    <>
        <Form method="POST" onSubmit={onSubmit}>
            <div className="row">
                <div className="col-6">
                
                    <label htmlFor="hometeam" className="form-label">Home Team</label>
                    <input type="text" name="hometeam" className="form-control" id=""
                    // onChange={(e) =>setHomeTeam(e.target.value)}  
                    />
                </div>
                <div className="col-6">
                    <label htmlFor="awayteam" className="form-label">Away Team</label>
                    <input type="text" name="hometeam" className="form-control" id="" 
                        // onChange={(e) =>setAwayTeam(e.target.value)}
                    />
                </div>
            </div>
            <div className="row">
            <div className="col">
                    <label htmlFor="gametime" className="form-label">Game Time</label>
                    <input type="text" name="gametime" className="form-control" id="" 
                    
                    // onChange={(e) =>setGameTime(e.target.value)} 
                    />
                </div>
            </div>
            <div className="row mt-3 mb-3">
          <div className="col">
            <button type="submit" className="btn btn-success w-100">
              Add Game
            </button>
          </div>
        </div>
        </Form>
    </>
  )
}

export default AddGame;