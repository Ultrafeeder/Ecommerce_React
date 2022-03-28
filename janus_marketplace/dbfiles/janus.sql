CREATE DATABASE Janus;

USE Janus;

CREATE TABLE prints(
id INT AUTO_INCREMENT PRIMARY KEY,
item_path VARCHAR(100),
item_name VARCHAR(100),
item_price DECIMAL(10, 2),
item_description TEXT
);

CREATE TABLE commissions(
id INT AUTO_INCREMENT PRIMARY KEY,
img_path VARCHAR(100),
service_name VARCHAR(100),
service_description TEXT
);

INSERT INTO prints(item_path, item_name, item_price, item_description)
VALUES
("assets/Bloodgod.jpg", "Blood God", 14.99,"I really enjoy Warhammer 40k lore, and the chaos gods are an interesting force in the universe. Khorne, his symbol is depicted on the skull, is the chaos god of slaughter, rage, and war. He is commonly depicted as a large behemoth that carries a giant sword and sits atop a throne of skulls, and his followers revel in their carnage while shouting 'BLOOD FOR THE BLOOD GOD! SKULLS FOR THE SKULL THRONE!'."),
("assets/desertSmoke.jpg", "Desert Smoke", 14.99,"I like history a lot, and the image of two historically opposed groups, Frontier Settlers and Indigenous Tribes, sitting around and having a smoke by the fire in the hostile desert environment at night is just a funny picture to me. From that thought, this was born."),
("assets/graveSearch.jpg", "Grave Search", 14.99,"I'm a huge fan of of video game series, Dark Souls. The knight in this image is a direct reference to the knight armor set in Dark Souls 3. I had a lot of fun drawing this, and I hope it makes your wall look a little cooler."),
("assets/mindSludge.jpg","Mind Sludge", 14.99,"While I'm not the biggest fan of Fullmetal Alchemist: Brotherhood(I like the original far more), the concept of Pride, the homunculus, was still pretty cool. Even without the ability to eviscerate you, having this presence that just jeers and jabs at you psychologically that haunts your shadow is pretty scary."),
("assets/MPC.png", "MPC", 14.99,"This piece is an older one that I drew back in 2019...and I'm not entirely sure where this inspiration came from. I was in a weird place in life, in my early 20's, and this is an equally odd piece of work from that period."),
("assets/MycelialFields.jpg", "Mycelial Fields", 14.99, "This piece is an older one that I drew back in 2019...and I'm not entirely sure where this inspiration came from. I was in a weird place in life, in my early 20's, and this is an equally odd piece of work from that period."),
("assets/omenFortress.jpg", "Omen Fortress", 14.99, "This piece is from 2019, and heavily inspired by the album cover art for 'None Shall Pass' by Aesop Rock. It was a hard time for me during those years, and it was nice to have some emotional validation through the songs on that album. Those emotions I dealt with manifested, and took the form of this piece.");

INSERT INTO commissions(img_path, service_name, service_description)
VALUES
("assets/ykwtf.png", "Logo Design","I'm also a graphic designer, and have done logos for businesses ranging from store fronts to music artists. If you're looking to promote something of yours, click the button below to send a message! I'll be glad to work something out for you."),
("assets/HeresyPaintingStudios.png", "Business card Design", "All businesses need some kind of business card to remind people who you are. I designed my own and I can design yours to print! Hit the button below to get started!"),
("assets/HALLOSTEP.jpeg", "Ep/Album Cover Design", "That limited run of vinyls wont' sell themselves, and a blank album cover will get skipped on spotify. If you need some killer album art, hit the button below."),
("assets/graveSearch.jpg", "Prints","If you want something to fill a space on you wall, and don't want to support the corporate mass production of royalty free dollar stor art, or an idea that you can't quite put to pen and paper, then hit the button below!"),
("assets/Bareth.jpeg", "Character Commission", "I have illustrated a lot of my dungeons and dragons characters from various campaigns, and understand the fun feeling of looking at a physical representation of the character you're roleplaying as. This applies to other roleplaying activities as well, and if you have a persona that you wish to bring to life, hit the button bellow!");