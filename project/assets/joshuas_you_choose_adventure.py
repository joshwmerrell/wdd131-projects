# This is the original code of the text based game finished May 31, 2025, for Intro to Programming - Spring 2025 - BYUI.




# This is going to be a multipe choice, adventure game.
# The player is going to start lost in the woods and will need to find a way out.


# GAME REQUIREMENTS

# > Have at least three levels of scenarios with possible choices.
# > Have at least one of the scenarios have more than two possible choices.
# > Write the choices in ALL CAPS, so that the user knows which words are possible responses to choose in each prompt.
# > Match on the keyword when checking on the user's responces regardless of the uppercase/lowercase used in the response (e.g., "match", "MATCH", "Match" should all work).
# > Make all the choices take you to different scenarios (You shouldn't have the same result for different choices).
# > Have choices work for only the correct question.
#    -In other words, if one scenario resulted in choices of Run/Hide, but another resulted in choices Follow/Look, you should not be able to respond with "Follow" to the question that asked for Run/Hide.
# > Provide an "else" clause for each question to handle the case that the user tries to type something other than the possible choices.


# TRUE MEANING OF THE STORY/ADVENTURE

# The player is stuck inside their head while they are in a comatose state in the "real world".
# For some unknown reason, they are in a state where they will either wake up or die.
# There is only one scenario where the player wakes up. They will have to wake up before night fall or else they die.
# There is only one path that leads to the player waking up.
# The player has to figure this out by trying and failing to make the correct decisions they are faced with.
# The player's phone represents their connection to the "real world".
# If it dies, their connection is severed and their fate is sealed. Night will fall and they will die.
# The only path that leads the player to wake up is the one in which they successfully make a call out with their phone.
# I highly suggest you play this game yourself before cheating and finding out which decisions lead to the player waking up.



# For convenience, let's define some general functions for our program.

def space():
    print()
    print()
    print()

def pleasechoose3() :
    print()
    print("PLEASE PICK 1, 2, or 3.")
    print()

def pleasechoose2() :
    print()
    print("PLEASE PICK 1 or 2.")
    print()




















# First, we want to determine what OS our player is running so that we can clear and write in the terminal of the OS properly for each senario.

import os




OS = 0

print()
while OS == 0 :
    print("At any time, if you want to end the adventure, hold down 'ctrl or cmd' and 'c'.")
    space()
    print("Before we begin, which operating system are you using?")
    print()
    print("1  WINDOWS\n2  LINUX\n3  MACOS\n4  OTHER\n")
    choice = input("> ")

    windows = choice == "1" or choice.lower() == "one" or choice.lower() == "windows"
    linux = choice == "2" or choice.lower() == "two" or choice.lower() == "linux"
    macos = choice == "3" or choice.lower() == "three" or choice.lower() == "macos"
    other = choice == "4" or choice.lower() == "four" or choice.lower() == "other"

    if windows :
        def clear() :
            os.system('cls')
        OS = 1

    elif linux or macos:
        def clear() :
            os.system('clear')
        OS = 1

    elif other :
        def clear() :
            space()
        OS = 1
    
    else :
        print()
        print("PLEASE CHOOSE 1, 2, 3, or 4.")
        print()
        OS = 0

clear()




















# Now we are going to introduce and begin the game!

print("At any time, if you want to end the adventure, hold down 'ctrl or cmd' and 'c'.")
space()
print("WELCOME TO JOSHUA'S YOU-CHOOSE ADVENTURE GAME!")
print()
print("You are going to find yourself lost in the woods.")
print("You will need to be found in order to escape the woods and beat the game.")
print("You lose if you die.")
print()
print()
print("Are you ready?\n")
adventure = input("> ")




















# Here we will determine what responce the player gets if they are ready or not:

clear()

# TBD if the "Are you ready" question changes the entire game. Beginning concept for it: 
#   easy_adventure
#   hard_adventure
#   default_adventure

ready = adventure.lower() == "y" or adventure.lower() == "yes." or adventure.lower() == "yes" or adventure.lower() == "yes!" or adventure.lower() == "yup." or adventure.lower() == "yup" or adventure.lower() == "yup!" or adventure.lower() == "absolutely." or adventure.lower() == "absolutely" or adventure.lower() == "absolutely!"
not_ready = adventure.lower() == "n" or adventure.lower() == "no." or adventure.lower() == "no" or adventure.lower() == "no!" or adventure.lower() == "nope." or adventure.lower() == "nope" or adventure.lower() == "nope!" or adventure.lower() == "never." or adventure.lower() == "never" or adventure.lower() == "never!"

if ready :
    print("Sweet! You're here...")

elif not_ready :
    print("No? Well too bad, it doesn't matter. You're already here...")
    involuntary_adventure = 1

else :
    print("What did you sa- You know what, it doesn't matter. You're already here...")


















# We are now in the woods.

print()
print("Lost and alone in the the woods.")
print()

play = 1
hint = 0




















# Here, we set our game to loop the player back to here to try again if they fail.


while play == 1 :

    print("You are now standing in a clearing with nothing but the clothes on your back and a cell phone in your pocket.")
    print("Your phone is low on battery and you have no idea where you are.")
    print()




















    # Here is our first decision!


    # Here, we set up all of our decision making variables that we are going to use from this point forward:

    decision = 0
    choice = 0
    option_1 = 0
    option_2 = 0
    option_3 = 0

    path_1 = 0
    path_1_1 = 0
    path_1_2 = 0

    path_2 = 0
    path_2_1 = 0
    path_2_2 = 0

    path_3 = 0
    path_3_1 = 0
    path_3_2 = 0
    path_3_3 = 0

    loose = 1


    while decision == 0 :

        print("You have three options. Do you...")
        print()
        print("1  DO NOTHING AND WAIT FOR SOMEONE TO FIND YOU\n2  TRY TO CALL SOMEONE\n3  WALK INTO THE WOODS TO FIND A WAY OUT\n")
        choice = input("> ")

        option_1 = choice == "1" or choice.lower() == "one" or choice.lower() == "do nothing and wait for someone to find me." or choice.lower() == "do nothing and wait for someone to find me" or choice.lower() == "do nothing" or choice.lower() == "nothing" or choice.lower() == "wait for someone to find me." or choice.lower() == "wait for someone to find me" or choice.lower() == "wait"
        option_2 = choice == "2" or choice.lower() == "two" or choice.lower() == "try to call someone." or choice.lower() == "try to call someone" or choice.lower() == "call someone" or choice.lower() == "call"
        option_3 = choice == "3" or choice.lower() == "three" or choice.lower() == "walk into the woods to find a way out." or choice.lower() == "walk into the woods to find a way out" or choice.lower() == "walk into the woods." or choice.lower() == "walk into the woods" or choice.lower() == "walk" or choice.lower() == "woods" or choice.lower() == "find a way out." or choice.lower() == "find a way out"


        if option_1 :
            path_1 = 1
            decision = 1

        elif option_2 :
            path_2 = 1
            decision = 1
        
        elif option_3 :
            path_3 = 1
            decision = 1

        else :
            clear()
            pleasechoose3()
            print()
            print("You are now standing in a clearing with nothing but the clothes on your back and a cell phone in your pocket.")
            print("Your phone is low on battery and you have no idea where you are.")
            print()
            decision = 0

    clear()




















    # This is what happens if the player stays in the clearing and waits for someone to find them:

    while path_1 == 1 :

        decision = 0
        choice = 0

        space()
        print("You have no idea where you are or where to go. You stay where you are and wait for help to arrive.")
        print("You take a nap to kill time. When you awake, the sky is darker and night is apporaching.")
        print("You get up, your phone is dead, and you notice animal tracks leading into the woods.")
        print()

        while decision == 0 :
            print("You now have two options. Do you...")
            print()
            print("1  FOLLOW THE ANIMAL TRACKS\n2  MAKE A SHELTER\n\n")
            choice = input("> ")

            option_1 = choice == "1" or choice.lower() == "one" or choice.lower() == "follow the animal tracks." or choice.lower() == "follow the animal tracks" or choice.lower() == "follow" or choice.lower() == "animal tracks" or choice.lower() == "animal" or choice.lower() == "tracks"
            option_2 = choice == "2" or choice.lower() == "two" or choice.lower() == "make a shelter." or choice.lower() == "make a shelter" or choice.lower() == "shelter"

            if option_1 :
                path_1_1 = 1
                decision = 1

            elif option_2 :
                path_1_2 = 1
                decision = 1

            else :
                clear()
                pleasechoose2()
                print("You have no idea where you are or where to go. You stay where you are and wait for help to arrive.")
                print("You take a nap to kill time. When you awake, the sky is darker and night is apporaching.")
                print("You get up, your phone is dead, and you notice animal tracks leading into the woods.")
                print()
                decision = 0
            


        clear()    



        # If the player follows animal tracks into the woods:
        
        while path_1_1 == 1 :

            space()
            print("Following animal tracks are better than doing nothing. You leave the clearing and follow them.")
            print("You walk until it gets too dark to follow the tracks. The nocturnal woods come to life all around you.")
            print("Finding yourself in a strage world full of sounds and noises, night has fallen and you are still lost.")
            print("You try to make your way back. You will do so in vain. At some point, the woods fall silent and you feel a deep dread.")
            print("You feel a million invisible eyes against the back of your head. Everywhere you turn, the void stares back at you.")
            print("There is something out there. You can feel it. Standing still, the darkness around you seems to get darker and darker.")
            print("You run as fast and as far as you can. You trip on something and everything around you flees into the void.")
            print("You are alone in a dark and unfamiliar world.")
            print()
            print("You will never be heard from again.")

            path_1 = 0
            path_1_1 = 0
        


        # If the player trys to make a shelter:
        
        while path_1_2 == 1 :

            space()
            print("You will be spending the night in the woods. You will need a shelter to protect yourself.")
            print("You scramble to find material, but without any tools, it's impossible to build one before nightfall.")
            print("Darkness settles in and you are left with just yourself and a pile of sticks. No shelter.")
            print("You sit down in the middle of the clearing and accept your situation. It gets cold and you can't sleep.")
            print("After a while, you hear things. It's subtle at first and it takes a moment to notice.")
            print("You hear footsteps in the woods. They get close, but stop at the edge of the tree line and circle the clearing.")
            print("There are voices and heavy breathing. Whoever or whatever is out there is waiting for something.")
            print("Out of the void, a wave of exhaustion hits you. Panicing, you fight it but you do so in vain.")
            print("Exhaustion overpowers you. As your eyes close, you hear them close in on you.")
            print("You will not be waking up.")

            path_1 = 0
            path_1_2 = 0




















    # If the player trys using their phone to call for help:

    while path_2 == 1 :

        decision = 0
        choice = 0

        space()
        print("You go ahead and try to call someone, but you are out of cell service range. You are stuck for now.")
        print("You walk around and notice that some of the trees beyond the clearing are taller than the rest.")
        print("You also find a path at the edge of the clearing that leads away from the tall trees.")
        print()

        while decision == 0 :
            print("You now have two options. Do you...")
            print()
            print("1  CLIMB A TREE TO REACH SERVICE\n2  FOLLOW THE PATH INTO THE WOODS\n\n")
            choice = input("> ")

            option_1 = choice == "1" or choice.lower() == "one" or choice.lower() == "climb a tree to reach service." or choice.lower() == "climb a tree to reach service" or choice.lower() == "climb a tree." or choice.lower() == "climb a tree" or choice.lower() == "climb" or choice.lower() == "tree" or choice.lower() == "reach service" or choice.lower() == "service"
            option_2 = choice == "2" or choice.lower() == "two" or choice.lower() == "follow the path into the woods." or choice.lower() == "follow the path into the woods" or choice.lower() == "follow the path." or choice.lower() == "follow the path" or choice.lower() == "path" or choice.lower() == "woods"

            if option_1 :
                path_2_1 = 1
                decision = 1

            elif option_2 :
                path_2_2 = 1
                decision = 1

            else :
                clear()
                pleasechoose2()
                print("You go ahead and try to call someone, but you are out of cell service range. You are stuck for now.")
                print("You walk around and notice that some of the trees beyond the clearing are taller than the rest.")
                print("You also find a path at the edge of the clearing that leads away from the tall trees.")
                print()
                decision = 0
            
        

        clear()



        # If the player climbs a tree:

        while path_2_1 == 1 :
            
            space()
            print("If you are high enough up, your phone will be within range of cell service and you will be able to call someone.")
            print("You leave the clearing and locate a very wide and tall tree. With much difficulty, you ascend it.")
            print("Eventually, you reach a spot to rest. Your phone is still not within range so you climb higher.")
            print("The branches get smaller and weaker. You reach the highest elevation you can without falling.")
            print("You are now high enough to make a call. You go to do so and you move your phone near your head.")
            print("It immediately slips from your hand. You watch as your only hope plummets to the forest floor. You are very high up.")
            print("You attempt to decend, but you are stuck! You stay in that tree and night falls. You are exhausted and weak.")
            print("The distant song of frogs and crickets tempts your sore limbs. You have no where else to go. You close your eyes and let go.")
            print("You wondered if your phone called out. You wondered if it reached someone. You will never know.")
            print("All the reaching branches below you fail to catch you as you fall into a sleep you will never wake up from.")

            path_2 = 0
            path_2_1 = 0



        # If the player follows the obvious trail:
        
        while path_2_2 == 1 :

            space()
            print("You have to get out of here. You have no tools, no direction and no idea how or why you are here.")
            print("You walk the path into the woods. There are many branching trails and signs, but they are of no use to you.")
            print("Each sign labels a different trail and doesn't give any hint if it leads out of the woods or to safety.")
            print("Many hours pass. The shadows shrink and grow as you walk aimlessly through the woods.")
            print("It is only when the sky darkens that you see the trail open up and reveal a clearing with something in the center.")
            print("There's a collapsed tent and a cold firepit. The tent is shredded and torn, and ash from the firepit is strewn everywhere.")
            print("It is a desecrated campsite with no other person or animal around. There is a notebook inside what was once a tent.")
            print("Written inside is the story of a lost person trying to find 'SUNSET MOUNTAIN TRAIL'. This person was escaping something.")
            print("Observing the campsite, it seems that whatever was chasing the poor soul caught up with them. Dread fills the air.")
            print("Night arrives and you feel the darkness bring an evil presence. It is here. Your fate is sealed and there is no escaping it.")

            hint = 1
            path_2 = 0
            path_2_2 = 0




















    # If the player walks into the woods and trys to get out on their own:

    while path_3 == 1 :

        decision = 0
        choice = 0

        space()
        print("You can't just stand around and do nothing. You need to find your way out. With nowhere else to go, you walk into the woods.")
        print("You soon find a path, and after a few hours, you find youself at a fork in the path and a sign.")
        print("The path splits into multiple trails. These trails are listed on the sign.")
        print()

        while decision == 0 :
            print("Which trail do you follow? Do you follow...")
            print()
            print("1  EVERGREEN CITY TRAIL\n2  GRIZZLY CAMP TRAIL\n\n")
            choice = input("> ")

            option_1 = choice == "1" or choice.lower() == "one" or choice.lower() == "evergreen city trail." or choice.lower() == "evergreen city trail" or choice.lower() == "evergreen city" or choice.lower() == "evergreen" or choice.lower() == "city"
            option_2 = choice == "2" or choice.lower() == "two" or choice.lower() == "grizzly camp trail." or choice.lower() == "grizzly camp trail" or choice.lower() == "grizzly camp" or choice.lower() == "grizzly" or choice.lower() == "camp"
            option_3 = (choice.lower() == "sunset mountain trail." or choice.lower() == "sunset mountain trail") and hint == 1

            if option_1 :
                path_3_1 = 1
                decision = 1

            elif option_2 :
                path_3_2 = 1
                decision = 1
            
            elif option_3 :
                path_3_3 = 1
                decision = 1

            else :
                clear()
                
                if hint == 1 :
                    print()
                    print("PLEASE PICK A TRAIL.")
                    print()
                else :
                    pleasechoose2()
                
                print("You can't just stand around and do nothing. You need to find your way out. With nowhere else to go, you walk into the woods.")
                print("You soon find a path, and after a few hours, you find youself at a fork in the path and a sign.")
                print("The path splits into multiple trails. These trails are listed on the sign.")
                print()
                decision = 0
            
        

        clear()



        # If the player follows Evergreen City Trail:

        while path_3_1 == 1 :

            space()
            print("You need to find civilization and be found! Evergreen City sounds like it's exactly the place you need to go.")
            print("You walk the trail until you reach an opening in the trees. Night is arriving")
            print("There's a wooden sign that reads 'EVERGREEN CITY'. You feel saved, but the feeling is short lived.")
            print("The trail leads you out onto a dirt road that is overgrown and has wooden, falling apart buildings on either side.")
            print("This is a small, abandonded villiage. There's no help to be found here and you still aren't within cell service range.")
            print("You start searching through the old and decaying bulidings to seek shelter and supplies.")
            print("Night has arrived so you have to use your cellphone's flashlight to navigate.")
            print("You search but the entire place looks ransacked and empty. Your phone dies and you are all alone in the dark.")
            print("You are in the last building and dread falls over you. A dark presence is here and it has been waiting.")
            print("You run, but the decaying floor collapses below you. Stuck and lost, you become another victim to the darkness of the night.")

            path_3 = 0
            path_3_1 = 0



        # If the player follows Grizzly Camp Trail:

        while path_3_2 == 1 :

            space()
            print("It seems that one of the trails lead to a camp. If there are people there, you will be found!")
            print("You head up Grizzly Camp Trail. The trail seems to be heading up hill.")
            print("You think that if you don't find people, you might get high enough to reach cell service.")
            print("As the shadows stretch and the light fades, you feel like something is following you. You walk faster and faster.")
            print("You end up jogging, then running. You don't hear or see it, but you feel its presence.")
            print("Something is hunting you and it feels like its getting closer. You soon reach the camp. It's in a clearing.")
            print("It's full of fallen tents and strewn supplies. There's no one here and whatever did this is now after you!")
            print("You hear it. Coming from behind you are the sounds of racing footsteps and gravelly breathing. It's almost on top of you!")
            print("Your phone has service. You scramble to make a call, but your phone dies in your hands. It's over.")
            print("From the trail, in the night's void you see a creature of pure darkness come at you. You do not survive.")

            path_3 = 0
            path_3_2 = 0



        # If the player follows another trail:

        while path_3_3 == 1 :

            space()
            print("You read 'SUNSET MOUNTAIN TRAIL'. It doesn't sound as promissing as the other trails, but you are drawn to it.")
            print("You feel right about it and start up to Sunset Mountain. The day is still young, but you feel as if the night is close.")
            print("As you progress, the trail gets steeper and the shadows beside the trail seem off. They look like they're reaching for you.")
            print("You get nervous and start jumping over those on the trail. You jog. Accidentally stepping in a shadow, you trip over it.")
            print("Defying natural law, it is bent. They're all pointed at you. You run. The sun lowers in the sky and the darkness gains strength.")
            print("It reaches out and grabs at you. Branches break, trees fall and piles of earth slide onto the trail. It's relentless.")
            print("It feels like forever, but you reach a wide overlook on Sunset Mountain. The darkness has blocked the trail behind you.")
            print("It's sunset and the darkness is closing in. You're trapped between a void and the sheer overlook drop. Is this it? Is it over?")
            print("Your phone starts ringing. The void hears it and lunges at you. You pick up the phone and a voice yells 'WAKE UP!'....")
            print("You're awake in bed. A worried sister is looking at you terrified: 'I though you were dying!' You're safe now. You're found.")


            play = 0
            loose = 0
            path_3 = 0
            path_3_3 = 0

            # Let's pause the program before it ends so the player can view the winning outcome:
            space()
            end = input("You Win! Press enter to close out of the game...")
            clear()


    if loose == 1 :

        decision = 0
        choice = 0

        while decision == 0 :
            space()
            print("Do you want to try again?\n")
            choice = input("> ")

            try_again = choice.lower() == "y" or choice.lower() == "yes"
            end_game = choice.lower() == "n" or choice.lower() == "no"

            if try_again :
                clear()
                print()
                print("Ok, let's try again:")
                print()
                print()
                play = 1
                decision = 1

            elif end_game :
                play = 0
                decision = 1

            else :
                decision = 0