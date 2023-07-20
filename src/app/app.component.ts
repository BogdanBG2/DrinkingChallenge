import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  challenges: string[] = [
    'Persoana care urmează să răspundă la întrebarea ta poate alege să răspundă sincer sau să refuze și să bea.',
    'Alege o persoană și ghicește culoarea lenjeriei lor intimă. Dacă ghicești corect, persoana respectivă bea; altfel, tu bei.',
    'Persoana cu cel mai puțini urmăritori pe Instagram bea.',
    'Alege o persoană să bea.',
    'Toți cei mai înalți decât tine beau.',
    'Cel mai tânăr bea.',
    'Cel mai bătrân bea.',
    'Toți cei mai înalți decât tine beau.',
    'Alege pe cineva să facă un shot de căsătorie cu tine.',
    'Toată lumea votează pentru cel mai probabil să fie arestat. Acea persoană bea.',
    'Toți bărbații beau.',
    'Toți cei care poartă blugi beau.',
    'Toată lumea votează pentru cel mai probabil să evite băuturile. Acea persoană bea.',
    'Toate femeile beau.',
    'Sună/experimentează un fost iubit sau bea.',
    'Alege un cuvânt. Fiecare persoană spune pe rând un cuvânt care rimează. Persoana care ezită sau repetă un cuvânt bea.',
    'Fazan. Pierzătorul bea.',
    'Bătălia sexelor. Toți cei de sex opus beau.',
    'Nasul pleacă! Pierzătorul bea.',
    'Adevăr sau provocare sau bea.',
    'Bea! Bea! Bea! Toată lumea!',
    'Alege pe cineva să joci un joc de thumb war (luptă cu degetul mic). Pierzătorul bea.',
    'Sărută pe cineva sau bea.',
    'Toată lumea votează pentru cel mai mare alcoolic. Acea persoană bea și alege o altă persoană să bea.',
    'Bea pentru fiecare frate/soră pe care îl ai.',
    'Alege pe cineva cu care să joci piatră, foarfecă, hârtie. Pierzătorul bea.',
    'Numește ultima persoană cu care te-ai sărutat sau bea.',
    'Toată lumea votează cine este cea mai mare curvă. Acea persoană bea.',
    'Fă o mărturisire sau bea.',
    'Vorbește cu un accent până când va fi iar tura ta. Dacă ești prins că nu vorbești cu accent, bei.',
    'Răspunde la o întrebare "Ai prefera...?" sau bea.',
    'Toți cei mai scunzi decât tine beau.',
    'Persoana care a folosit cel mai recent la baie bea.',
    'Aruncă o monedă. Dacă iese cap, bei. Dacă iese pajură, toți ceilalți beau.',
    'Toți cei care sunt singuri beau.',
    'Atac dublu! Păstrează această carte. O poți folosi o singură dată pentru a forța o persoană să bea dublu.',
    'Tu bei.',
    'Începând cu tine, fiecare persoană spune o culoare pe rând. Continuă până când cineva ezită sau repetă o culoare. Acea persoană bea.',
    'Începând cu tine, fiecare persoană spune o arma de pe CS:GO pe rând. Continuă până când cineva ezită sau repetă o arma. Acea persoană bea.',
    'Începând cu tine, fiecare persoană spune o harta de pe CS:GO pe rând. Continuă până când cineva ezită sau repetă o harta. Acea persoană bea.',
    'Începând cu tine, fiecare persoană spune o zona de pe Dust2 pe rând. Continuă până când cineva ezită sau repetă o zona. Acea persoană bea.',
    'Atac de schimb! Păstrează această carte. O poți folosi o singură dată pentru a forța pe altcineva să bea în locul tău.',
    'Bea! Bea! Bea! Toată lumea!',
    'Necazul atrage compania! Păstrează această carte. O poți folosi o singură dată pentru a forța o persoană să bea cu tine.'
  ];
  index: number = -1;
  message: string = '';

  ngOnInit(): void {
    console.log(this.challenges);
    
  }

  onClick(): void {
    this.index = Math.floor(Math.random() * this.challenges.length);
    this.message = this.challenges[this.index];
    console.log(this.message);
  }

}
