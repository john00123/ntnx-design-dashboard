

const projects = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


const previousWeek = [

  {name :'Feats. in Concept ',
  description: `The concept's primary objective is to gather the most pertinent information necessary to create a successful UX design.`,
  value: 100},
  {name :'Feats. in Design ',
  description: `The Design phase is the production time in creating reviewing testing and finalizing designs.`,
  value: 100},
  {name :'Feats. in Dev Q/A',
  description: `Dev QA's phase foucisng in validating implementaion, tweak design before final production and testing operations.`,
  value: 100},

];
const container = $('.cadence')
const workload = $('.workload')

//<svg class='pie' viewBox="-1 -1 2 2" height='150px' style="transform: rotate(-90deg)"></svg><br>
const card = (v) => `<div class='card' flex='c'>
<h3>${v.name}</h3>
<h2 style='margin-bottom:50px;'>${v.value}</h2>

<div class='graph'>
  <svg class='pie' viewBox="-1 -1 2 2" height='150px' style="transform: rotate(-90deg); position:relative"></svg>
</div>

<br><hr fw>
<h3 style='margin-top:10px' fw>150 Last Week <p fw> 10 new Feats. & 2 reassigned </p><hr fw></h3>
<h3 style='margin-top:-5px' fw>100 Projected Next Week <p fw> 10 new Feats. & 2 reassigned </p><hr fw></h3>
<p>${v.description}</p></div>`

const cardGraph = (v) => `<div class='card' flex='c'>
<h3>${v.name}</h3>
  <div class='charts' fw flex='r'>
  <div class='barChart w0' >${(v.value/100)*20}</div>
  <div class='barChart w2' >${(v.value/100)*30}</div>
  <div class='barChart w4' >${(v.value/100)*50}</div>


  </div>
  <h3 style='margin-top:10px;' fw>
  <p fw> <span class='w0 sm'>−</span> less than a week </p><hr fw>
  <p fw> <span class='w2 sm'>=</span> between 2-4 weeks </p><hr fw>
  <p fw> <span class='w4 sm'>+</span> more than 4 weeks</p> <hr fw></h3>
  <h3 style='margin-top:0px' fw><p fw>This graph depicts how long each FEAT has been in its current phase.</p></h3>
</div>`

previousWeek.map(value => container.append(card(value)));
previousWeek.map(value => container.append(cardGraph(value)));


for(i=0; i<20; i++){
  let color = Math.random()*(+1 - +0.2);

  projects.map(value => workload.append(`<div class='box' flex='c' style='background: rgba(94,185,116,${color}); color:${color<0.4? "rgba(94,185,116,1)": "white"};

  '>${Math.round(Math.random()*(+100 - +0))}</div>`))

}




const svgEl = document.querySelector('.pie');
const slices = [
  { name: '15',  percent: 0.15, color: '#024DA1', opacity:1.0 },
  { name: '55',  percent: 0.65, color: '#024DA1', opacity:0.6 },
  { name: '30 ', percent: 0.30, color: '#024DA1', opacity:0.4 },
];

let cumulativePercent = 0;

function getCoordinatesForPercent(percent) {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x, y];
}

slices.forEach(slice => {
  // destructuring assignment sets the two variables at once
  const [startX, startY] = getCoordinatesForPercent(cumulativePercent);

  // each slice starts where the last slice ended, so keep a cumulative percent
  cumulativePercent += slice.percent;

  const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

  // if the slice is more than 50%, take the large arc (the long way around)
  const largeArcFlag = slice.percent > .5 ? 1 : 0;

	// create an array and join it just for code readability
  const pathData = [
    `M ${startX} ${startY}`, // Move
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
    `L 0 0`, // Line
  ].join(' ');


  // create a <path> and append it to the <svg> element
  const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathEl.setAttribute('d', pathData);
  pathEl.setAttribute('class', slice.name);
  pathEl.setAttribute('fill', slice.color);
  pathEl.setAttribute('position', 'relative');
  pathEl.setAttribute('opacity', slice.opacity);
  $('.pie').append(pathEl);

  $('.graph').append(
    `<h3 class='slice'
      style='position:absolute;
      top : ${(largeArcFlag-startX*10 - endY*30)+45}px!important;
      left: ${(startY*50 - largeArcFlag+endY*20)+70}px!important;'>
      ${slice.name}
    </h3>`);
});

$('.graph').remove();
$('.highlights').append(
  `<div class='card' flex='c'>

    <h3 class='hgl' style='margin-top:10px' fw>200 Patents filed <p fw> Including 100 utility and 50 design patents</p><hr fw></h3>
    <h3  class='hgl' style='margin-top:-5px' fw>Tested Licensing flows<p fw> Feedbackfrom customers about licenses retrieved</p><hr fw></h3>
    <h3  class='ngl' style='margin-top:-5px' fw>Pulse<p>Pulse data on product</p><hr fw></h3>
    <h3  class='ngl' style='margin-top:-5px; margin-bottom:0' fw>100 Feats. closed <p fw> Organizing buggaton to close P0 bugs in product </p></h3>
    </div>`
)




var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

$('.title').after(`<h3 fw style='margin-top:0'>${today}</h3>`)
