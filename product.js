const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/getProduct', async (req, res) => {
    var data = [
        {
            name: "Shakib Al Hasan",
            playing_country: "Bangladesh",
            birth_date: "Mar 24, 1987",
            birth_place: "Magura, Jessore",
            role: "Batting Allrounder",
            batting_style: "Left Handed Bat",
            bowling_style: "Left-arm orthodox",
            shirt_number: "21",
            photo:"https://www.cricbuzz.com/a/img/v1/500x500/i1/c170912/shakib-al-hasan.jpg"
        },
        {
            name: "Ben Stokes",
            playing_country: "England",
            birth_date: "Jun 04, 1991 ",
            birth_place: "Canterbury, New Zealand",
            role: "Batting Allrounder",
            batting_style: "Left Handed Bat",
            bowling_style: "Right-arm fast-medium",
            shirt_number: "45",
            photo:"https://www.cricbuzz.com/a/img/v1/500x500/i1/c170950/ben-stokes.jpg"
        },
        {
            name: "Ravindra Jadeja",
            playing_country: "India",
            birth_date: "Dec 06, 1988",
            birth_place: "Navagam-Khed, Saurashtra",
            role: "Bowling Allrounder",
            batting_style: "Left Handed Bat",
            bowling_style: "Left-arm orthodox",
            shirt_number: "41",
            photo:"https://www.cricbuzz.com/a/img/v1/500x500/i1/c170670/ravindra-jadeja.jpg"
        },
        {
            name: "Jason Holder",
            playing_country: "West Indies",
            birth_date: "Nov 05, 1991",
            birth_place: "Barbados",
            role: "Bowling Allrounder",
            batting_style: "Right Handed Bat",
            bowling_style: "Right-arm fast-medium",
            shirt_number: "13",
            photo:"https://www.cricbuzz.com/a/img/v1/500x500/i1/c170806/jason-holder.jpg"
        },
        {
            name: "Ravichandran Ashwin",
            playing_country: "India",
            birth_date: "Sep 17, 1986",
            birth_place: "Chennai, Tamil Nadu",
            role: "Bowling Allrounder",
            batting_style: "Right Handed Bat",
            bowling_style: "Right-arm offbreak",
            shirt_number: "12",
            photo:"https://www.cricbuzz.com/a/img/v1/500x500/i1/c153372/ravichandran-ashwin.jpg"
        },
        {
            name: "Kyle Jamieson",
            playing_country: "New Zealand",
            birth_date: "Dec 30, 1994 ",
            birth_place: "Auckland",
            role: "Bowler",
            batting_style: "Right Handed Bat",
            bowling_style: "Right-arm fast-medium",
            shirt_number: "56",
            photo:"https://www.cricbuzz.com/a/img/v1/500x500/i1/c156101/kyle-jamieson.jpg"
        },
        {
            name: "Mitchell Starc",
            playing_country: "Australia",
            birth_date: "Jan 30, 1990",
            birth_place: "Baulkham Hills, Sydney, New South Wales",
            role: "Bowler",
            batting_style: "Left Handed Bat",
            bowling_style: "Left-arm fast",
            shirt_number: "45",
            photo:"https://www.cricbuzz.com/a/img/v1/500x500/i1/c170643/mitchell-starc.jpg"
        },
        {
            name: "Pat Cummins",
            playing_country: "Australia",
            birth_date: "May 08, 1993",
            birth_place: "Westmead, Sydney",
            role: "Bowler",
            batting_style: "Right Handed Bat",
            bowling_style: "Right-arm fast",
            shirt_number: "11",
            photo:"https://www.cricbuzz.com/a/img/v1/500x500/i1/c170651/pat-cummins.jpg"
        },
        {
            name: "Chris Woakes",
            playing_country: "England",
            birth_date: "Mar 02, 1989 ",
            birth_place: "Birmingham, Warwickshire",
            role: "Bowling Allrounder",
            batting_style: "Right Handed Bat",
            bowling_style: "Right-arm fast-medium",
            shirt_number: "14",
            photo:"https://www.cricbuzz.com/a/img/v1/500x500/i1/c170964/chris-woakes.jpg"
        },
        {
            name: "Colin de Grandhomme",
            playing_country: "New Zealand",
            birth_date: "Jul 22, 1986",
            birth_place: "Harare",
            role: "Batting Allrounder",
            batting_style: "Right Handed Bat",
            bowling_style: "Right-arm fast-medium",
            shirt_number: "10",
            photo:"https://www.cricbuzz.com/a/img/v1/500x500/i1/c170735/colin-de-grandhomme.jpg"
        },
        {
            name: "Mohammad Nabi",
            playing_country: "Afghanistan",
            birth_date: "Jan 01, 1985",
            birth_place: "Loger, Afghanistan",
            role: "Bowling Allrounder",
            batting_style: "Right Handed Bat",
            bowling_style: "Right-arm offbreak",
            shirt_number: "13",
            photo:"https://www.cricbuzz.com/a/img/v1/500x500/i1/c170853/mohammad-nabi.jpg"
        }
    ] 

        res.send(data)
} )





app.listen(3000, () => console.log("Server is Started"))