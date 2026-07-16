// Pages

export const credits =  {
    title: "Credits",
    paragraphs: [
        "Joshua Merrell is the Author, Creator, and Proprietor of this game.",
        "This small piece of the internet is the final project for his Spring 2026 WDD131 class at BYU-Idaho, Idaho.",
        "He would like to thank his teacher, James Warner, and the TA, Joshua Walker. They did a good job teaching the class this year."
    ]
};

export const mainMenu = {
    title:  {
        imageSrc: "assets/logo/logo_small.png",
        imageAlt: "B",
        words: ["rave", "The", "Darkness"]
    },
    introduction: "You will be placed in a predicament that requries one to face the abyss and find a way out of the wilderness. Will you brave the darkness? (Do know that the flee button closes the game.)",
    decisions:  [
        {
            nextStep: "step_0",
            label: "Brave"
        },
        {
            nextStep: "exit",
            label: "Flee"
        }
    ],
    background: {
        defaultColor: "#050F00"
        // Will come up with a way to incorporate a background image later.
        // imageSrc: "",
        // imageAlt: ""
    }
};

export const steps = [
    {
        id: "step_0",
        title: "The Beginning",
        narration: [
            "You wake up lost and alone in the woods, your mind a blank slate. You stand in a stark clearing with nothing but the clothes on your back. In your pocket, a cell phone glows weakly, its battery dying as fast as your memory of how you got here. Around you, the trees press close, and the air grows steadily colder."
        ],
        call_to_action: "Do you...",
        decisions: [
            {
                nextStep: "step_1",
                label: "Walk into the woods to find a way out?",
                hidden: false
            },
            {
                nextStep: "step_2",
                label: "Do nothing and wait for someone to find you?",
                hidden: false
            },
            {
                nextStep: "step_3",
                label: "Try to call someone?",
                hidden: false
            }
        ],
        choiceType: "button",
        unlockStory: {
            unlock: false,
            step: "",
            decision: ""
        },
        imageSrc: "assets/setting_images/step_0.png",
        imageAlt: "Image of a clearing in the woods."
    },
    {
        id: "step_0_1",
        title: "The Clearing",
        narration: [
            "You are back in the clearing, haunted by a vivid echo of your previous attempt. Something is deeply wrong. The air is heavier, the silence thicker, as if the world itself is losing its grip. You still have your phone, its battery still draining, and the same paths lie before you. Yet, a cold dread whispers that you are running out of time."
        ],
        call_to_action: "Do you...",
        decisions: [
            {
                nextStep: "step_1",
                label: "Walk into the woods to find a way out?",
                hidden: false
            },
            {
                nextStep: "step_2",
                label: "Do nothing and wait for someone to find you?",
                hidden: false
            },
            {
                nextStep: "step_3",
                label: "Try to call someone?",
                hidden: false
            }
        ],
        choiceType: "button",
        unlockStory: {
            unlock: false,
            step: "",
            decision: ""
        },
        imageSrc: "assets/setting_images/step_0_1.png",
        imageAlt: "Image of a clearing in the woods."
    },
    {
        id: "step_1",
        title: "The Woods",
        narration: [
            "Staying doesn't feel wise; you have to find a way out. You plunge into the shadows of the trees and find a walking path. After what feels like hours of heavy, exhausting walking, you stumble onto a fork in the path. A weathered wooden sign stands rotting at the crossroads, listing two legible destinations: EVERGREEN CITY TRAIL and GRIZZLY CAMP TRAIL."
        ],
        call_to_action: "Where do you go?",
        decisions: [
            {
                nextStep: "step_1_1",
                label: "Sunset Mountain",
                hidden: true
            },
            {
                nextStep: "step_1_2",
                label: "Evergreen City",
                hidden: false
            },
            {
                nextStep: "step_1_3",
                label: "Grizzly Camp",
                hidden: false
            }
        ],
        choiceType: "textInput",
        unlockStory: {
            unlock: false,
            step: "",
            decision: ""
        },
        imageSrc: "assets/setting_images/step_1.png",
        imageAlt: "Image of a path in the woods with a sign."
    },
    {
        id: "step_1_1",
        title: "Sunset Mountain",
        narration: [
            "You notice another trail branching off. It is narrow and overgrown, yet an undeniable pull draws you toward it. You choose this path.",
            "Though the sun is still up, a suffocating night feels close. As the trail steepens, the shadows beside you warp. They stretch, reaching toward your ankles. Panic spikes in your chest; you begin to leap over the dark patches, pick up your pace, and jog. But your foot clips a shadow—and you trip. Defying natural law, the shadow bends like solid matter under your weight. Every dark shape on the forest floor is now pointing directly at you. You run.",
            "The sun sinks lower, feeding the darkness. It lunges. Behind you, branches snap, trees splinter, and the earth itself slides onto the trail in a relentless pursuit. After what feels like an eternity of running on failing legs, you burst onto a wide mountain overlook.",
            "The path behind you is swallowed by blackness. It is sunset, and the abyss is closing in. You are trapped between the void and the sheer drop of the cliff. Is this the end?",
            "Suddenly, your phone rings. The darkness shrieks and lunges. You press the phone to your ear just as a voice screams: 'WAKE UP!'",
        ],
        call_to_action: "",
        decisions: [
            {
                nextStep: "step_1_1_0",
                label: "Next Page",
                hidden: false
            }
        ],
        choiceType: "button",
        unlockStory: {
            unlock: false,
            step: "",
            decision: ""
        },
        imageSrc: "assets/setting_images/step_1_1.png",
        imageAlt: "Image of a mountain surrounded by shadows."
    },
    {
        id: "step_1_1_0",
        title: "...",
        narration: [
            "Your eyes snap open, heavy and burning. You gasp, drawing cold, real air into your lungs. You are lying in your own bed. It is night, and a little girl is beside you, frantically shaking your shoulder. 'I thought you were dying!' she cries.",
            "Your racing heart slows. Your shallow breathing finally settles. The nightmare is gone."
        ],
        call_to_action: "",
        decisions: [
            {
                nextStep: "",
                label: "",
                hidden: true
            }
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
        id: "step_1_2",
        title: "Evergreen City",
        narration: [
            "You decide that civilization is your salvation. Evergreen City is exactly where you need to be. You follow the trail until the trees finally part, just as night begins to fall. A weathered wooden sign reads: EVERGREEN CITY. Relief washes over you, but it is brutally short-lived.",
            "The path leads you not to a bustling city, but into an abandoned, overgrown ghost town. Rotting stone and wooden structures loom on either side of a silent dirt road. There is no life here, and your phone still has no service. Desperate for shelter and supplies as the darkness thickens, you flick on your phone's flashlight to search the ruins.",
            "Every building is empty, ransacked, and dead. Suddenly, your phone screen flickers and dies, plunging you into absolute blackness. Standing in the heart of the final decaying structure, a paralyzing dread grips your chest. A cold, dark presence is in the room with you—and it has been waiting. You turn to run, but the rotting floorboards disintegrate beneath your feet.",
            "Trapped in the collapse, helpless and lost in the dark, you are swallowed by the night."
        ],
        call_to_action: "Do you try again?",
        decisions: [
            {
                nextStep: "step_0_1",
                label: "Yes",
                hidden: false
            },
            {
                nextStep: "mainMenu",
                label: "No",
                hidden: false
            }
        ],
        choiceType: "button",
        unlockStory: {
            unlock: false,
            step: "",
            decision: ""
        },
        imageSrc: "assets/setting_images/step_1_2.png",
        imageAlt: "Image of an abandonded villiage in the woods."
    },
    {
        id: "step_1_3",
        title: "Grizzly Camp",
        narration: [
            "You reason that a camp must mean people, and people mean rescue. You head up the Grizzly Camp Trail. The path climbs steadily uphill; even if the camp is empty, the elevation might finally give you enough signal to call for help.",
            "But as the shadows stretch and the daylight bleeds away, an icy sensation creeps up your spine. Something is behind you. Your pace quickens to a jog, then a desperate sprint. You can't see or hear it, but you can feel it hunting you, closing the gap with terrifying speed.",
            "You burst into a clearing littered with collapsed tents and torn supplies. You have found the camp, but it is a graveyard. There is no one here to save you, and whatever destroyed this place is now on your heels. Suddenly, you hear it: the sound of rushing footsteps and heavy, gravelly breathing echoing your own. It is right on top of you.",
            "Your eyes dart to your phone—you have service! You scramble to dial, but the screen flickers black in your trembling hands. It's over.",
            "Out of the night's absolute void, a shape of pure, suffocating darkness lunges. You do not survive."
        ],
        call_to_action: "Do you try again?",
        decisions: [
            {
                nextStep: "step_0_1",
                label: "Yes",
                hidden: false
            },
            {
                nextStep: "mainMenu",
                label: "No",
                hidden: false
            }
        ],
        choiceType: "button",
        unlockStory: {
            unlock: false,
            step: "",
            decision: ""
        },
        imageSrc: "assets/setting_images/step_1_3.png",
        imageAlt: "Image of desesecrated camp."
    },
    {
        id: "step_2",
        title: "It's Getting Late",
        narration: [
            "Paralyzed by uncertainty, you decide to stay put and wait for rescue. To pass the time, you close your eyes and slip into a heavy, dreamless sleep.",
            "When you finally wake, a freezing chill has settled over the clearing. The sky has bruised into a deep twilight, and the encroaching night is suffocatingly close. You push yourself up, your limbs feeling heavy and unresponsive. Your phone is completely dead. On the damp earth beside you, a fresh set of animal tracks leads deep into the shadows of the woods."
        ],
        call_to_action: "Do you...",
        decisions: [
            {
                nextStep: "step_2_1",
                label: "Follow the animal tracks?",
                hidden: false
            },
            {
                nextStep: "step_2_2",
                label: "Make a shelter?",
                hidden: false
            }
        ],
        choiceType: "button",
        unlockStory: {
            unlock: false,
            step: "",
            decision: ""
        },
        imageSrc: "assets/setting_images/step_2.png",
        imageAlt: "Image of the clearing in the evening."
    },
    {
        id: "step_2_1",
        title: "Enter the Abyss",
        narration: [
            "Following the tracks is better than doing nothing. You leave the clearing behind and trail them deeper into the trees until the fading light fails you entirely. Around you, the nocturnal woods awaken with a cacophony of strange, unnatural sounds. Lost in this bizarre landscape, you decide to turn back—but your efforts are in vain.",
            "Suddenly, a suffocating silence falls over the forest. A bone-deep dread paralyzes you. You feel the weight of a million invisible eyes boring into the back of your head. Everywhere you turn, the void stares back. There is something out there, closing in.",
            "As you stand frozen, the blackness around you grows impossibly darker, pressing against your chest. You bolt, running blindly through the dark. You trip, and as you fall, the ground seems to vanish entirely. The world flees into the void, leaving you drifting in a silent, unfamiliar expanse. You will never be heard from again."
        ],
        call_to_action: "Do you try again?",
        decisions: [
            {
                nextStep: "step_0_1",
                label: "Yes",
                hidden: false
            },
            {
                nextStep: "mainMenu",
                label: "No",
                hidden: false
            }
        ],
        choiceType: "button",
        unlockStory: {
            unlock: false,
            step: "",
            decision: ""
        },
        imageSrc: "assets/setting_images/step_2_1.png",
        imageAlt: "Image of a dark and haunted wood."
    },
    {
        id: "step_2_2",
        title: "They Watch, They Wait",
        narration: [
            "You realize you will be spending the night in the woods. You desperately scramble to find building materials, but without tools, it is impossible to construct a shelter before nightfall. The darkness settles in, leaving you exposed, shivering, and clutching a useless pile of sticks.",
            "Defeated, you sit in the center of the cold clearing and try to accept your situation. But sleep is impossible as the temperature plummets. After a while, you hear it—subtle at first, then unmistakable. Footsteps crunch in the dark. They stop at the very edge of the tree line, slowly circling the clearing. You hear whispering voices and a heavy, raspy breathing. Whatever is out there is waiting for something.",
            "Suddenly, a massive, crushing wave of exhaustion hits you. You panic, fighting to keep your eyes open, but your protests are in vain. Your limbs turn to lead. As your eyelids slip shut, the sounds of the dark rush forward, closing in on you.",
            "You will not be waking up."
        ],
        call_to_action: "Do you try again?",
        decisions: [
            {
                nextStep: "step_0_1",
                label: "Yes",
                hidden: false
            },
            {
                nextStep: "mainMenu",
                label: "No",
                hidden: false
            }
        ],
        choiceType: "button",
        unlockStory: {
            unlock: false,
            step: "",
            decision: ""
        },
        imageSrc: "assets/setting_images/step_2_2.png",
        imageAlt: "Image of the clearing in the night."
    },
    {
        id: "step_3",
        title: "Make a Call",
        narration: [
            "You frantically dial for help, but there is no signal. You are completely cut off. Desperate, you scout the perimeter of the clearing. You notice a cluster of ancient trees towering far above the rest of the canopy, their high branches piercing the fading sky. Nearby, a narrow path winds away from them, disappearing into the dense forest."
        ],
        call_to_action: "Do you...",
        decisions: [
            {
                nextStep: "step_3_1",
                label: "Climb a tree to reach service?",
                hidden: false
            },
            {
                nextStep: "step_3_2",
                label: "Follow the path into the woods?",
                hidden: false
            }
        ],
        choiceType: "button",
        unlockStory: {
            unlock: false,
            step: "",
            decision: ""
        },
        imageSrc: "assets/setting_images/step_3.png",
        imageAlt: "Image of path into trees."
    },
    {
        id: "step_3_1",
        title: "The Fall",
        narration: [
            "If you can climb high enough, you might find a signal and secure a lifeline. You approach a massive, towering tree and begin a grueling, agonizing climb. When you finally stop to rest, there is still no service. You force your trembling muscles to climb higher, even as the branches grow dangerously thin and brittle.",
            "Finally, perched at the absolute limit of safety, your phone catches a bar of signal. You gasp, raising the screen to dial—but your sweat-slicked fingers slip. You watch in paralyzed horror as your only hope plummets, vanishing into the green abyss below.",
            "Panic sets in, but when you look down, you realize you are stuck. High above the world, the cold night settles over you. You are weak, exhausted, and broken. Below, the rhythmic, distant chorus of crickets and frogs sings a hypnotic lullaby, tempting your sore, aching limbs to just stop fighting. With nowhere else to go, you close your eyes and let go of the bark.",
            "As you fall, you wonder if your phone managed to dial on its way down. You wonder if your voice ever reached anyone. You will never know. The reaching branches below fail to catch you as you plunge into a deep, endless sleep."
        ],
        call_to_action: "Do you try again?",
        decisions: [
            {
                nextStep: "step_0_1",
                label: "Yes",
                hidden: false
            },
            {
                nextStep: "mainMenu",
                label: "No",
                hidden: false
            }
        ],
        choiceType: "button",
        unlockStory: {
            unlock: false,
            step: "",
            decision: ""
        },
        imageSrc: "assets/setting_images/step_3_1.png",
        imageAlt: "Image of the tree tops with one very tall tree."
    },
    {
        id: "step_3_2",
        title: "The Notebook",
        narration: [
            "You have to get out of here. Armed with no tools, no direction, and no memories, you plunge down the path into the forest. You pass countless branching trails and weathered signs, but they are useless; each lists a random destination, offering no hint of safety.",
            "Hours bleed away. The shadows stretch and warp as you wander aimlessly. Only when the sky turns a bruised, dark purple does the path finally spit you out into a clearing.",
            "In the center lies a ruined campsite. A shredded tent stands collapsed near a cold, scattered firepit, its ashes strewn like gray snow. The place has been violently desecrated, yet there are no tracks of any person or animal. Crawling inside the torn nylon of the tent, you find a dirt-stained notebook.",
            "The frantic handwriting inside tells the story of another lost soul desperately trying to find the 'SUNSET MOUNTAIN TRAIL' to escape something chasing them. Looking around the wreckage, it is painfully clear that whatever was hunting them eventually caught up.",
            "A suffocating dread floods the clearing as night falls, and with the darkness comes a cold, malicious presence. It has found you. Your fate is sealed."
        ],
        call_to_action: "Do you try again?",
        decisions: [
            {
                nextStep: "step_0_1",
                label: "Yes",
                hidden: false
            },
            {
                nextStep: "mainMenu",
                label: "No",
                hidden: false
            }
        ],
        choiceType: "button",
        unlockStory: {
            unlock: true,
            step: "step_1",
            decision: "step_1_1"
        },
        imageSrc: "assets/setting_images/step_3_2.png",
        imageAlt: "Image of a destroyed camp site."
    }
];