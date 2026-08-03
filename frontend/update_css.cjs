const fs = require('fs');
const file = 'e:/Airbnb_Clone/frontend/src/styles/MainContentLayout.module.css';
let css = fs.readFileSync(file, 'utf8');

const updates = {
  '.sectionTitle': 'font-size: 22px; font-weight: 500; line-height: 26px;',
  '.subSectionTitle': 'font-size: 18px; font-weight: 500; line-height: 26px;',
  '.propertyDetailsList': 'font-size: 16px; font-weight: 400; line-height: 20px;',
  '.highlightTitle': 'font-size: 16px; font-weight: 400; line-height: 20px;',
  '.highlightSubtitle': 'font-size: 14px; font-weight: 400; line-height: 18px;',
  '.descriptionText': 'font-size: 16px; font-weight: 400; line-height: 24px;',
  '.showMoreButton': 'font-size: 14px; font-weight: 500; line-height: 20px;',
  '.showMoreButtonLarge': 'font-size: 16px; font-weight: 500; line-height: normal;',
  '.priceValue': 'font-size: 22px; font-weight: 500; line-height: 31px;',
  '.reserveButton': 'font-size: 16px; font-weight: 500; line-height: normal; color: white;',
  '.widgetLabel': 'font-size: 10px; font-weight: 700; line-height: 14px; text-transform: uppercase;',
  '.widgetDateValue': 'font-size: 14px; font-weight: 500; line-height: 18px;',
  '.sleepSpaceTitle': 'font-size: 16px; font-weight: 500; line-height: normal;',
  '.sleepSpaceSubtitle': 'font-size: 15px; font-weight: 500; line-height: 21px;',
  '.amenityItemText': 'font-size: 16px; font-weight: 400; line-height: 24px;',
  '.showAllAmenitiesButton': 'font-size: 16px; font-weight: 500; line-height: normal;',
  '.showAllReviewsButton': 'font-size: 16px; font-weight: 500; line-height: normal;',
  '.calendarSubtitle': 'font-size: 14px; font-weight: 400; line-height: 20px;',
  '.largeReviewScore': 'font-size: 100px; font-weight: 500; line-height: 143px;',
  '.guestFavouriteSubtitle': 'font-size: 14px; font-weight: 400; line-height: 20px; color: rgb(113, 113, 113);',
  '.reviewCategoryTitle': 'font-size: 14px; font-weight: 500; line-height: 20px;',
  '.reviewerName': 'font-size: 15px; font-weight: 500; line-height: 21px;',
  '.reviewText': 'font-size: 15px; font-weight: 400; line-height: 21px;',
  '.mapCaptionText': 'font-size: 15px; font-weight: 400; line-height: 23px;',
  '.hostCardName': 'font-size: 26px; font-weight: 500; line-height: 37px;',
  '.coHostName': 'font-size: 14px; font-weight: 400; line-height: 20px;',
  '.messageHostButton': 'font-size: 15px; font-weight: 500; line-height: normal;',
  '.hostDetailsText': 'font-size: 15px; font-weight: 400; line-height: 21px;',
  '.paymentProtectionText': 'font-size: 12px; font-weight: 400; line-height: 17px; color: rgb(113, 113, 113);',
  '.thingsToKnowHeader': 'font-size: 16px; font-weight: 500; line-height: 23px;',
  '.thingsToKnowItem': 'font-size: 14px; font-weight: 400; line-height: 21px;',
  '.nearbyStaysTitle': 'font-size: 14px; font-weight: 500; line-height: 20px;'
};

const aliases = {
  '.locationTitle': updates['.subSectionTitle'],
  '.coHostsSectionTitle': updates['.subSectionTitle'],
  '.pickerLabel': updates['.widgetLabel'],
  '.pickerValue': updates['.widgetDateValue'],
  '.sleepSpaceDesc': updates['.sleepSpaceSubtitle'],
  '.amenityItem': updates['.amenityItemText'],
  '.secondaryButton': 'font-size: 16px; font-weight: 500; line-height: normal;',
  '.reviewsRatingTextOverall': updates['.largeReviewScore'],
  '.reviewsOverallSubtitle': updates['.guestFavouriteSubtitle'],
  '.metricLabel': updates['.reviewCategoryTitle'],
  '.locationDesc': updates['.mapCaptionText'],
  '.rulesColTitle': updates['.thingsToKnowHeader'],
  '.ruleItem': updates['.thingsToKnowItem'],
  '.stayCardTitle': updates['.nearbyStaysTitle']
};

let toAppend = '';

for (const [cls, rules] of Object.entries(updates)) {
  let blockRegex = new RegExp('(\\' + cls + '\\s*\\{)([^}]*)(\\})');
  if (css.match(blockRegex)) {
     css = css.replace(blockRegex, (match, p1, p2, p3) => {
       let inner = p2.replace(/font-size:[^;]+;/g, '')
                     .replace(/font-weight:[^;]+;/g, '')
                     .replace(/line-height:[^;]+;/g, '');
       if (rules.includes('color:')) {
          inner = inner.replace(/color:[^;]+;/g, '');
       }
       return p1 + inner.trimEnd() + '\n  ' + rules.split(';').map(x=>x.trim()).filter(Boolean).join(';\n  ') + ';\n' + p3;
     });
  } else {
     toAppend += '\n' + cls + ' {\n  ' + rules.split(';').map(x=>x.trim()).filter(Boolean).join(';\n  ') + ';\n}\n';
  }
}

for (const [cls, rules] of Object.entries(aliases)) {
  let blockRegex = new RegExp('(\\' + cls + '\\s*\\{)([^}]*)(\\})');
  if (css.match(blockRegex)) {
     css = css.replace(blockRegex, (match, p1, p2, p3) => {
       let inner = p2.replace(/font-size:[^;]+;/g, '')
                     .replace(/font-weight:[^;]+;/g, '')
                     .replace(/line-height:[^;]+;/g, '');
       if (rules.includes('color:')) {
          inner = inner.replace(/color:[^;]+;/g, '');
       }
       return p1 + inner.trimEnd() + '\n  ' + rules.split(';').map(x=>x.trim()).filter(Boolean).join(';\n  ') + ';\n' + p3;
     });
  }
}

fs.writeFileSync(file, css + toAppend);
console.log("Done updating MainContentLayout.module.css");
