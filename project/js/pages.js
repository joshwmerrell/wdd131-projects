// Pages

export const mainMenu = {
                            title: "Brave The Darkness",
                            introduction: ""
                        };

export const steps = [
    // object makup:    {
    //                      id: string,
    //                      title: string,
    //                      narration: [string...],
    //                      call_to_action: string (most typically "Do you..."),
    //                      decisions:  [
    //                                      [step.id, decision_label_or_description, number (1 for visible or 0 for hidden)]...
    //                                  ],
    //                      choiceType: string (either "button" or "textInput"),
    //                      imageSrc: string,
    //                      imageAlt: string
    //                  }
    
    // step_0: The Beginning
    // You are lost and alone in the woods. You have no memory of how or why you are here. You are standing in a clearing with nothing but the clothes on your back and a cell phone in your pocket. Your phone is low on battery and you have no idea where you are.
    //     Do you...
    //     step_1: Walk into the woods to find a way out?
    //     step_2: Do nothing and wait for someone to find you?
    //     step_3: Try to call someone?
    {
        id: "step_0",
        title: "The Beginning",
        narration:  [
                        "You are lost and alone in the woods. You have no memory of how or why you are here. You are standing in a clearing with nothing but the clothes on your back and a cell phone in your pocket. Your phone is low on battery and you have no idea where you are."
                    ],
        call_to_action: "Do you...",
        decisions:  [
                        ["step_1", "Walk into the woods to find a way out?", 1],
                        ["step_2", "Do nothing and wait for someone to find you?", 1],
                        ["step_3", "Try to call someone?", 1]
                    ],
        choiceType: "button",
        unlockStory: {
                        unlock: false,
                        step: "",
                        decision: ""
                    },
        imageSrc: "",
        imageAlt: "Image of a clearing in the woods."
    },
    // step_0_1: The Clearing
    // You are back in the clearing and you remember your previous journey. You take a look around and something feels off. You know being here is wrong, but it feels different. You can't tell what it is. You still have your phone and your options are still the same.
    // Do you...
    // step_1: Walk into the woods to find a way out?
    // step_2: Do nothing and wait for someone to find you?
    // step_3: Try to call someone?
    {
        id: "step_0_1",
        title: "The Clearing",
        narration:  [
                        "You are back in the clearing and you remember your previous journey. You take a look around and something feels off. You know being here is wrong, but it feels different. You can't tell what it is. You still have your phone and your options are still the same."
                    ],
        call_to_action: "Do you...",
        decisions:  [
                        ["step_1", "Walk into the woods to find a way out?", 1],
                        ["step_2", "Do nothing and wait for someone to find you?", 1],
                        ["step_3", "Try to call someone?", 1]
                    ],
        choiceType: "button",
        unlockStory: {
                        unlock: false,
                        step: "",
                        decision: ""
                    },
        imageSrc: "",
        imageAlt: "Image of a clearing in the woods."
    },
    // step_1: The Woods
    // You can't just stand around and do nothing. You need to find your way out. With nowhere else to go, you walk into the woods. You soon find a path, and after a few hours, you find youself at a crossroads. There is an old, worn sign with trailnames listed on it, and the path forks into multiple trails. The trailnames you can read are as follows: EVERGREEN CITY TRAIL, and GRIZZLY CAMP TRAIL.
    // Which trail do you go down?
    // (The entry will be a text input)
    // step_1_1: Sunset Mountain Trail (hidden until encountered step_3_2)
    // step_1_2: Evergreen City Trail
    // step_1_3: Grizzly Camp Trail
    {
        id: "step_1",
        title: "The Woods",
        narration:  [
                        "You can't just stand around and do nothing. You need to find your way out. With nowhere else to go, you walk into the woods. You soon find a path, and after a few hours, you find youself at a crossroads. There is an old, worn sign with trailnames listed on it, and the path forks into multiple trails. The trailnames you can read are as follows: EVERGREEN CITY TRAIL, and GRIZZLY CAMP TRAIL."
                    ],
        call_to_action: "Which trail do you go down?",
        decisions:  [
                        ["step_1_1", "Sunset Mountain", 0],
                        ["step_1_2", "Evergreen City", 1],
                        ["step_1_3", "Grizzly Camp", 1],
                    ],
        choiceType: "textInput",
        unlockStory: {
                        unlock: false,
                        step: "",
                        decision: ""
                    },
        imageSrc: "",
        imageAlt: ""
    },
    // step_1_1, ending_0: Sunset Mountain
    // You notice another trail leading away. It looks smaller and less conspicuous, but there is just something that feels right about it. You hike this one.
    // The day is still young, but you feel as if the night is close. As you progress, the trail gets steeper and the shadows beside the trail seem off. They look like they're reaching for you. You get nervous and start jumping over those on the trail. You jog. Accidentally stepping in a shadow, you trip over it. Defying natural law, it is bent. They're all pointed at you. You run.
    // The sun lowers in the sky and the darkness gains strength. It reaches out and grabs at you. Branches break, trees fall and piles of earth slide onto the trail. It's relentless. Your journey feels like forever, but you reach a wide overlook against a mountain.
    // The darkness has blocked the trail behind you. It's sunset and the darkness is closing in. You're trapped between a void and the sheer overlook drop. You're surrounded by the abyss. Is this it? Is it over?
    // Your phone starts ringing. The darkness hears it and lunges at you. You pick up the phone and a voice yells 'WAKE UP!'....
    // (next page)
    // You open your groggy and fatigued eyes. You're lying in bed in your bedroom. It is night time and there is a little girl next to your bed shaking you. 'I though you were dying!' Your anxiety calms and your breathing settles. It is better now.
    // You are safe. You are found.
    {
        id: "step_1_1",
        title: "Sunset Mountain",
        narration:  [
                        "You notice another trail leading away. It looks smaller and less conspicuous, but there is just something that feels right about it. You hike this one.",
                        "The day is still young, but you feel as if the night is close. As you progress, the trail gets steeper and the shadows beside the trail seem off. They look like they're reaching for you. You get nervous and start jumping over those on the trail. You jog. Accidentally stepping in a shadow, you trip over it. Defying natural law, it is bent. They're all pointed at you. You run.",
                        "The sun lowers in the sky and the darkness gains strength. It reaches out and grabs at you. Branches break, trees fall and piles of earth slide onto the trail. It's relentless. Your journey feels like forever, but you reach a wide overlook against a mountain.",
                        "The darkness has blocked the trail behind you. It's sunset and the darkness is closing in. You're trapped between a void and the sheer overlook drop. You're surrounded by the abyss. Is this it? Is it over?",
                        "Your phone starts ringing. The darkness hears it and lunges at you. You pick up the phone and a voice yells 'WAKE UP!'...."
                    ],
        call_to_action: "",
        decisions:  [
                        ["step_1_1_0", "Next Page", 1]
                    ],
        choiceType: "button",
        unlockStory: {
                        unlock: false,
                        step: "",
                        decision: ""
                    },
        imageSrc: "",
        imageAlt: ""
    },
    {
        id: "step_1_1_0",
        title: "",
        narration:  [
                        "You open your groggy and fatigued eyes. You're lying in bed in your bedroom. It is night time and there is a little girl next to your bed shaking you. 'I though you were dying!' Your anxiety calms and your breathing settles. It is better now.",
                        "You are safe. You are found."
                    ],
        call_to_action: "",
        decisions:  [],
        choiceType: "button",
        unlockStory: {
                        unlock: false,
                        step: "",
                        decision: ""
                    },
        imageSrc: "",
        imageAlt: ""
    },
    // step_1_2, ending_1: Evergreen City
    // You determine civilization is where your salvation lies! Evergreen City sounds exactly where you need to be. You walk the trail until you reach an opening in the trees. Night is arriving. There's a wooden sign that reads 'EVERGREEN CITY'. You feel saved, but the feeling is short lived. The trail leads you into an abandonded and overgrown village. There is rotting, wooden, buildings on either side of a dirt road. There's no help to be found here and you still aren't within cell service range. You search through the old and decaying bulidings to seek shelter and supplies. Night has arrived so you have to use your cellphone's flashlight to navigate. The entire place is ransacked and empty. Your phone dies and you are all alone in the dark. You are in the last building and dread falls over you. A dark presence is here and it has been waiting. You run, but the decaying floor collapses below you. Stuck and lost, you become a victim to the darkness of the night.
    // Do you try again?
    // step_0_1: Yes
    // end_game: No
    {
        id: "step_1_2",
        title: "Evergreen City",
        narration:  [
                        "You determine civilization is where your salvation lies! Evergreen City sounds exactly where you need to be. You walk the trail until you reach an opening in the trees. Night is arriving. There's a wooden sign that reads 'EVERGREEN CITY'. You feel saved, but the feeling is short lived. The trail leads you into an abandonded and overgrown village. There is rotting, wooden, buildings on either side of a dirt road. There's no help to be found here and you still aren't within cell service range.",
                        "You search through the old and decaying bulidings to seek shelter and supplies. Night has arrived so you have to use your cellphone's flashlight to navigate. The entire place is ransacked and empty. Your phone dies and you are all alone in the dark. You are in the last building and dread falls over you. A dark presence is here and it has been waiting. You run, but the decaying floor collapses below you. Stuck and lost, you become a victim to the darkness of the night."
                    ],
        call_to_action: "Do you try again?",
        decisions:  [
                        ["step_0_1", "Yes", 1],
                        ["", "No", 1]
                    ],
        choiceType: "button",
        unlockStory: {
                        unlock: false,
                        step: "",
                        decision: ""
                    },
        imageSrc: "",
        imageAlt: ""
    },
    // step_1_3, ending_2: Grizzly Camp
    // It seems that one of the trails lead to a camp. If there are people there, you will be found! You head up Grizzly Camp Trail. The trail seems to be heading up hill. If you don't find people, you might get high enough to reach cell service! As the shadows stretch and the light fades, you feel like something is following you. Your pace quickens. You end up jogging, then running. You don't hear or see it, but you feel it hunting you and it feels like its getting closer. You soon reach a clearing full of fallen tents and strewn supplies. You've found camp, but it's abandonded. There's no one here and whatever did this is now after you! You hear it: sounds of racing footsteps and gravelly breathing. It's almost on top of you! Your phone has service; You scramble to make a call, but your phone dies in your hands. It's over.
    // From the trail, in the night's void you see a creature of pure darkness come at you. You do not survive.
    // Do you try again?
    // step_0_1: Yes
    // end_game: No
    {
        id: "step_1_3",
        title: "Grizzly Camp",
        narration:  [
                       "It seems that one of the trails lead to a camp. If there are people there, you will be found! You head up Grizzly Camp Trail. The trail seems to be heading up hill. If you don't find people, you might get high enough to reach cell service! As the shadows stretch and the light fades, you feel like something is following you. Your pace quickens. You end up jogging, then running. You don't hear or see it, but you feel it hunting you and it feels like its getting closer.",
                       "You soon reach a clearing full of fallen tents and strewn supplies. You've found camp, but it's abandonded. There's no one here and whatever did this is now after you! You hear it: sounds of racing footsteps and gravelly breathing. It's almost on top of you! Your phone has service; You scramble to make a call, but your phone dies in your hands. It's over." 
                    ],
        call_to_action: "Do you try again?",
        decisions:  [
                        ["step_0_1", "Yes", 1],
                        ["", "No", 1]
                    ],
        choiceType: "button",
        unlockStory: {
                        unlock: false,
                        step: "",
                        decision: ""
                    },
        imageSrc: "",
        imageAlt: ""
    },
    // step_2: It's Getting Late
    // You have no idea where you are or where to go. You stay where you are and wait for help to arrive. You take a nap to kill time. When you awake, the sky is darker and night is apporaching. You get up, your phone is dead, and you notice animal tracks leading into the woods.
    // Do you...
    // step_2_1: Follow the animal tracks?
    // step_2_2: Make a shelter?
    {
        id: "step_2",
        title: "It's Getting Late",
        narration:  [
                        "You have no idea where you are or where to go. You stay where you are and wait for help to arrive. You take a nap to kill time. When you awake, the sky is darker and night is apporaching. You get up, your phone is dead, and you notice animal tracks leading into the woods."
                    ],
        call_to_action: "Do you...",
        decisions:  [
                        ["step_2_1", "Follow the animal tracks?", 1],
                        ["step_2_2", "Make a shelter?", 1]
                    ],
        choiceType: "button",
        unlockStory: {
                        unlock: false,
                        step: "",
                        decision: ""
                    },
        imageSrc: "",
        imageAlt: ""
    },
    // step_2_1, ending_3
    // Following animal tracks are better than doing nothing. You leave the clearing and follow them. You walk until it gets too dark to follow the tracks. The nocturnal woods come to life all around you. Finding yourself in a strage world full of sounds and noises, night has fallen and you are still lost. You try to make your way back. You will do so in vain. At some point, the woods fall silent and you feel a deep dread. You feel a million invisible eyes against the back of your head. Everywhere you turn, the void stares back at you. There is something out there. You can feel it. Standing still, the darkness around you seems to get darker and darker. You run as fast and as far as you can. You trip on something and everything around you flees into the void. You are alone in a dark and unfamiliar world. You will never be heard from again.
    // Do you try again?
    // step_0_1: Yes
    // end_game: No
    {
        id: "step_2_1",
        title: "",
        narration:  [
                        "Following animal tracks are better than doing nothing. You leave the clearing and follow them. You walk until it gets too dark to follow the tracks. The nocturnal woods come to life all around you. Finding yourself in a strage world full of sounds and noises, night has fallen and you are still lost. You try to make your way back. You will do so in vain. At some point, the woods fall silent and you feel a deep dread.",
                        "You feel a million invisible eyes against the back of your head. Everywhere you turn, the void stares back at you. There is something out there. You can feel it. Standing still, the darkness around you seems to get darker and darker. You run as fast and as far as you can. You trip on something and everything around you flees into the void. You are alone in a dark and unfamiliar world. You will never be heard from again."
                    ],
        call_to_action: "Do you try again?",
        decisions:  [
                        ["step_0_1", "Yes", 1],
                        ["", "No", 1]
                    ],
        choiceType: "button",
        unlockStory: {
                        unlock: false,
                        step: "",
                        decision: ""
                    },
        imageSrc: "",
        imageAlt: ""
    },
    // step_2_2, ending_4
    // You will be spending the night in the woods. You will need a shelter to protect yourself. You scramble to find material, but without any tools, it's impossible to build one before nightfall. Darkness settles in and you are left with just yourself and a pile of sticks. No shelter. You sit down in the middle of the clearing and accept your situation. It gets cold and you can't sleep. After a while, you hear things. It's subtle at first and it takes a moment to notice. You hear footsteps in the woods. They get close, but stop at the edge of the tree line and circle the clearing. There are voices and heavy breathing. Whoever or whatever is out there is waiting for something. Out of the void, a wave of exhaustion hits you. Panicing, you fight it but you do so in vain. Exhaustion overpowers you. As your eyes close, you hear them close in on you. You will not be waking up.
    // Do you try again?
    // step_0_1: Yes
    // end_game: No
    {
        id: "step_2_2",
        title: "",
        narration:  [
                        "You will be spending the night in the woods. You will need a shelter to protect yourself. You scramble to find material, but without any tools, it's impossible to build one before nightfall. Darkness settles in and you are left with just yourself and a pile of sticks. No shelter. You sit down in the middle of the clearing and accept your situation. It gets cold and you can't sleep.",
                        "After a while, you hear things. It's subtle at first and it takes a moment to notice. You hear footsteps in the woods. They get close, but stop at the edge of the tree line and circle the clearing. There are voices and heavy breathing. Whoever or whatever is out there is waiting for something. Out of the void, a wave of exhaustion hits you. Panicing, you fight it but you do so in vain. Exhaustion overpowers you. As your eyes close, you hear them close in on you. You will not be waking up."
                    ],
        call_to_action: "Do you try again?",
        decisions:  [
                        ["step_0_1", "Yes", 1],
                        ["", "No", 1]
                    ],
        choiceType: "button",
        unlockStory: {
                        unlock: false,
                        step: "",
                        decision: ""
                    },
        imageSrc: "",
        imageAlt: ""
    },
    // step_3: Make a Call
    // You go ahead and try to call someone, but you are out of cell service range. You are stuck for now. You walk around and notice that some of the trees beyond the clearing are taller than the rest. You also find a path at the edge of the clearing that leads away from the tall trees.
    // Do you...
    // step_3_1: Climb a tree to reach service?
    // step_3_2: Follow the path into the woods?
    {
        id: "step_3",
        title: "Make a Call",
        narration:  [
                        "You go ahead and try to call someone, but you are out of cell service range. You are stuck for now. You walk around and notice that some of the trees beyond the clearing are taller than the rest. You also find a path at the edge of the clearing that leads away from the tall trees."
                    ],
        call_to_action: "Do you...",
        decisions:  [
                        ["step_3_1", "Climb a tree to reach service?", 1],
                        ["step_3_2", "Follow the path into the woods?", 1]
                    ],
        choiceType: "button",
        unlockStory: {
                        unlock: false,
                        step: "",
                        decision: ""
                    },
        imageSrc: "",
        imageAlt: ""
    },
    // step_3_1, ending_5
    // If you are high enough up, your phone will be within range of cell service and you will be able to call someone. You leave the clearing and locate a very wide and tall tree. With much difficulty, you ascend it. Eventually, you reach a spot to rest. Your phone is still not within range so you climb higher. The branches get smaller and weaker. You reach the highest elevation you can without falling. You are now high enough to make a call. You go to do so and you move your phone near your head. It immediately slips from your hand. You watch as your only hope plummets to the forest floor. You are very high up. You attempt to decend, but you are stuck! You stay in that tree and night falls. You are exhausted and weak. The distant song of frogs and crickets tempts your sore limbs. You have no where else to go. You close your eyes and let go. You wondered if your phone called out. You wondered if it reached someone. You will never know. All the reaching branches below you fail to catch you as you fall into a sleep you will never wake up from.
    // Do you try again?
    // step_0_1: Yes
    // end_game: No
    {
        id: "step_3_1",
        title: "",
        narration:  [
                        "If you are high enough up, your phone will be within range of cell service and you will be able to call someone. You leave the clearing and locate a very wide and tall tree. With much difficulty, you ascend it. Eventually, you reach a spot to rest. Your phone is still not within range so you climb higher. The branches get smaller and weaker. You reach the highest elevation you can without falling.",
                        "You are now high enough to make a call. You go to do so and you move your phone near your head. It immediately slips from your hand. You watch as your only hope plummets to the forest floor. You are very high up. You attempt to decend, but you are stuck! You stay in that tree and night falls. You are exhausted and weak. The distant song of frogs and crickets tempts your sore limbs. You have no where else to go. You close your eyes and let go. You wondered if your phone called out. You wondered if it reached someone. You will never know. All the reaching branches below you fail to catch you as you fall into a sleep you will never wake up from."
                    ],
        call_to_action: "Do you try again?",
        decisions:  [
                        ["step_0_1", "Yes", 1],
                        ["", "No", 1]
                    ],
        choiceType: "button",
        unlockStory: {
                        unlock: false,
                        step: "",
                        decision: ""
                    },
        imageSrc: "",
        imageAlt: ""
    },
    // step_3_2, ending_6
    // You have to get out of here. You have no tools, no direction and no idea how or why you are here. You walk the path into the woods. There are many branching trails and signs, but they are of no use to you. Each sign labels a different trail and doesn't give any hint if it leads out of the woods or to safety. Many hours pass. The shadows shrink and grow as you walk aimlessly through the woods. It is only when the sky darkens that you see the trail open up and reveal a clearing with something in the center. There's a collapsed tent and a cold firepit. The tent is shredded and torn, and ash from the firepit is strewn everywhere. It is a desecrated campsite with no other person or animal around. There is a notebook inside what was once a tent. Written inside is the story of a lost person trying to find 'SUNSET MOUNTAIN TRAIL'. This person was escaping something. Observing the campsite, it seems that whatever was chasing the poor soul caught up with them. Dread fills the air. Night arrives and you feel the darkness bring an evil presence.
    // It is here. Your fate is sealed and there is no escaping it.
    // Do you try again?
    // step_0_1: Yes
    // end_game: No
    {
        id: "step_3_2",
        title: "",
        narration:  [
                        "You have to get out of here. You have no tools, no direction and no idea how or why you are here. You walk the path into the woods. There are many branching trails and signs, but they are of no use to you. Each sign labels a different trail and doesn't give any hint if it leads out of the woods or to safety. Many hours pass. The shadows shrink and grow as you walk aimlessly through the woods.",
                        "It is only when the sky darkens that you see the trail open up and reveal a clearing with something in the center. There's a collapsed tent and a cold firepit. The tent is shredded and torn, and ash from the firepit is strewn everywhere. It is a desecrated campsite with no other person or animal around. There is a notebook inside what was once a tent. Written inside is the story of a lost person trying to find 'SUNSET MOUNTAIN TRAIL'. This person was escaping something. Observing the campsite, it seems that whatever was chasing the poor soul caught up with them. Dread fills the air. Night arrives and you feel the darkness bring an evil presence.",
                        "It is here. Your fate is sealed and there is no escaping it."
                    ],
        call_to_action: "Do you try again?",
        decisions:  [
                        ["step_0_1", "Yes", 1],
                        ["", "No", 1]
                    ],
        choiceType: "button",
        unlockStory: {
                        unlock: true,
                        step: "step_1",
                        decision: "step_1_1"
                    },
        imageSrc: "",
        imageAlt: ""
    }
    // {
    //     id: "",
    //     title: "",
    //     narration:  [
    //                     ""
    //                 ],
    //     call_to_action: "",
    //     decisions:  [
    //                     []
    //                 ],
    //     choiceType: "",
    //     unlockStory: {
    //                     unlock: false,
    //                     step: "",
    //                     decision: ""
    //                 },
    //     unlockStory: {},
    //     imageSrc: "",
    //     imageAlt: ""
    // }
];