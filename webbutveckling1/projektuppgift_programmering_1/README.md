#Dokumentation av projekt Programmering 1


###2021-10-20
<p> Jag börja med att skapa en tavla på trello och skriva up saker som jag ska göra. Efter det
så satt jag och kollade upp inspiration till layout/design på hemsidan jag ska använda. Och 
jag bestämde mig att ta inspiration av CDON.com.</p>

###2021-10-21
<p>Denna dag börja med att skapa filerna "index.html, album.js, test.js, style.css" efter
det så börja jag med byta title till Albums. Sen börja med det vanliga tags
"header, nav, main, footer". Jag börja med jobba på Header och få in logo och checkout icon
samt en fake dropdown menu. Jag skapa en img fil nu för att få in iconer. Jag stöte på mitt 
första problem som var att jag ej vet hur jag får in iconen från https://css.gg/shopping-cart.
Jag gick istället över till google fonts och ladda ner två .png filer till hamburger menu och
shopping cart. Har nu gjort en section som innehåller header och cart samt menu med sina id.
skappade sen en search bar under då stötte jag på problemet att jag inte kunde få den att gå 
hela vägen från vänster till höger. Så för stunden så satte jag den i mitten under logo.
Jag bytte ut iconerna mott större varianter för att det passade bättre in när jag la lite
margin. Sen la jag till färger till både header och nav. jag la till en bild om covers för
se lite bättre ut. Jag började jobba på hur iconeran menu och cheackout skulle liga och med
logan och fick använda mig av margin lef & right samt top för placera dem. Jag la till en
border runt header också för lite mer detaljer.</p>

###2021-10-22
<p>Idag starta jag med skapa en ny section under cover som ska vara för albumen. Jag börja
med skapa en h2. Jag börja nu jobba på hitta och skapa albumen och även h3 under dem i varje
article som jag skapat. Medans jag gjorde det åkte jag på ett problem då jag vill ha
4 album i rad på 2 rows. jag gick då in på cdon där dom gjort det fast fler rows en 2.
jag kollade element och såg att man kan använda repeat för att skapa det 2 rows med 4fr 
på varje rad med grid. Jag nu lagt till lite stayling på det så att det ser bättre ut
ex som gap mellan och en hr under erbjudandeHeader. Jag gav också övre bilden på covers 
lime färg bakom för att ge mer färg. Jag adda nu även padding på h3 i articlarna för att ge 
margin så det ligger längre upp med bilden samt lite font-size. Jag skapade buttons på alla 
album som jag designa om lite så det ser bättre ut. Men innan jag började med 
det så adda jag en footer. Jag tog hjälp av våran gamla uppgift och adda den footer jag
använde till denna uppgift och gjorde om den lite. </p>

###2021-10-23
<p>Jag gjorde ej mer en ta det lugnt och kolla in videos på youtube</p>

###2021-10-24 
<p>Samma idag som igår. Gjorde ej mycket mer en kolla videos på youtube.</p>

###2021-10-25
<p>Började dagen med genomgång med Lars. Efter det så gjorde jag så att jag ändra storlek på
cover bilden. I slutet valde jag ta bort den helt då den tar upp för mycket plats. Jag min
main en width på 70% och fixera den i mitten. Flyttade också ut erbjudande texten från main.
</p>

###2021-10-26
<p>Jag börja med lägga till pris på albumen. jag tog också bort 70% width och gick tillbaka 
till normalt läge. Jag addade onClick till alla buttons. Jag bytte ut namnet köp kr till
Add to cart. Jag la till add_cart() enbart till två album på test filen för se så de 
fungerar med en alert. Bytte namn på checkout till cart. Jag började använda test.js 
med array och objects för se om jag kna komma fram till något. Jag skapa en id.js också
för att gör allt lättare hålla koll på.</p>

###2021-10-26 
<p>Jag bestämde mig för att börja om allt förutom footer som jag lätt liga kvar 
i HTML filen. Jag börja med skapa id.js som jag då skapa albumens id/data.
Efter det börja jag bygga på skapa cards med albumen. Jag började med skapa article
function. Jag tog också bort bilder från id. sen börja jag med skapa funktioner för 
att få in det i html så du kan se dem sen. först när jag var klar med article så 
skapa jag en function som tar sig in i html med en innerHtml function. Sen nästa
function har jag sätt på lektion vilket är den med content. Som fungerar på att
let ger uttrymme med '' där text kan användas. Och sen for (const album of id) är för
att article heter album ska förstå att id är den. Sen htmlElment skapar utrymme för att
genrateAlbum ska få plats som nu är kopplad med album och id. Sen kommer Innerhtml 
function som skapar till id som jag satt och den vill skapa utrymme med htmlElement.
sen så slutet kommer htmlContent in som genererar allt jag vill ha in där. Jag stöte på
ett problem för inget kom upp. Jag löste det med att jag kom på igår att Lars och 
Christopher paratade om att JavaScript filerna ligger fel årdning så kanske de ej fungera 
så kollade det och dem låg fel. Bestämde mig nu att adda bild och css till albumen.
stöte på problem då min grid ej ville fungera. löste det jag hade glömt skriva display.
Efter även det så vill den ej fungera med css. Kom på mistaget att jag glömt lägga 
in en link till css filen album. Jag vänta med få img att fungera och fråga klassen om det.
jag började skapa cart section och det är nästan samma sak som med album/cards. Nu måste jag
bygga functionen som kopllar dem och räknar hur många av dem. Jag började med skapa en 
function som känner igen article album så jag skapa en let myCart. Sen skapa jag en 
for (const album of myCart) för att koppa ihop dem precis som förut. Nu när den känner igen
function album så vill jag den strict söker efter album.artist button vilkt den gör med ===.
vilket jag vill ska komma true i fall den känner av den och false om något annat.

</p>