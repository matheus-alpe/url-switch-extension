// import { storage } from '@utils';

// let rules = [];

// const rulesUl = document.querySelector('#rules ul');

// const inputFrom = document.querySelector('#from');

// const inputTo = document.querySelector('#to');

// const submitBtn = document.querySelector('#submit');

// storage.get('rules').then((response) => {
//     rules = response.rules;
//     refreshRules();
// });

// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     let from = inputFrom.value;
//     let to = inputTo.value;

//     let newRule = {
//         from: from,
//         to: to,
//         active: true,
//         isEditing: false,
//     };

//     rules.push(newRule);
//     updateRules();
//     refreshRules();
// });

// function refreshRules() {
//     rulesUl.innerHTML = '';

//     if (rules.length) {
//         for (var i = 0; i < rules.length; i++) {
//             var rule = rules[i];
//             var active = rule.active ? 'active' : '';
//             var checked = rule.active ? 'checked="checked"' : '';
//             var disabled = rule.isEditing ? '' : 'disabled';
//             var actionsDefault = `
//                 <input type="checkbox" class="checkbox" name="active" ${checked} />
//                 <a href="#" class="editRuleButton" >Edit</a>
//                 <a href="#" class="removeRuleButton">Remove</a>
//             `;
//             var actionsEditting = `<button class="save">Save</button>`;
//             var actions = rule.isEditing ? actionsEditting : actionsDefault;

//             var li = `
//                 <li class="${active}" data-rule-index="${i}">
//                     <input class="from" title="${rule.from}" ${disabled} value="${rule.from}" />
//                     <span class="seperator">&gt;</span>
//                     <input class="to" title="${rule.to}" ${disabled} value="${rule.to}" />
//                     <div class="actions">
//                         ${actions}
//                     </div>
//                 </li>
//             `;

//             rulesUl.appendChild(stringToHTML(li));
//         }

//         bindEventActions();
//     }
// }

// function bindEventActions() {
//     // Edit
//     function clickEditAction(e) {
//         var li = e.target.parentElement.parentElement;
//         var index = Number(li.getAttribute('data-rule-index'));
//         rules[index].isEditing = !rules[index].isEditing;
//         updateRules();
//     }

//     var editButtons = rulesUl.querySelectorAll('.editRuleButton');
//     editButtons.forEach((btn) => {
//         btn.removeEventListener('click', clickEditAction);
//         btn.addEventListener('click', clickEditAction);
//     });

//     //Save
//     function clickSaveAction(e) {
//         var li = e.target.parentElement.parentElement;
//         var index = Number(li.getAttribute('data-rule-index'));
//         const inputFrom = li.querySelector('.from').value;
//         const inputTo = li.querySelector('.to').value;
//         rules[index].from = inputFrom;
//         rules[index].to = inputTo;
//         rules[index].isEditing = false;
//         updateRules();
//     }

//     var saveButtons = rulesUl.querySelectorAll('.save');
//     saveButtons.forEach((btn) => {
//         btn.removeEventListener('click', clickSaveAction);
//         btn.addEventListener('click', clickSaveAction);
//     });

//     // Remove
//     function clickRemoveAction(e) {
//         var li = e.target.parentElement.parentElement;
//         var index = Number(li.getAttribute('data-rule-index'));
//         rules.splice(index, 1);
//         updateRules();
//     }
//     var removeButtons = rulesUl.querySelectorAll('.removeRuleButton');
//     removeButtons.forEach((btn) => {
//         btn.removeEventListener('click', clickRemoveAction);
//         btn.addEventListener('click', clickRemoveAction);
//     });

//     // Active
//     function toggleCheckbox(e) {
//         var li = e.target.parentElement.parentElement;
//         var index = Number(li.getAttribute('data-rule-index'));
//         rules[index].active = e.target.checked;
//         updateRules();
//     }
//     var checkboxButtons = rulesUl.querySelectorAll('.checkbox');
//     checkboxButtons.forEach((btn) => {
//         btn.removeEventListener('change', toggleCheckbox);
//         btn.addEventListener('change', toggleCheckbox);
//     });
// }

// // Utils
// function stringToHTML(str) {
//     var parser = new DOMParser();
//     var doc = parser.parseFromString(str, 'text/html');
//     return doc.body.firstElementChild;
// }

// function updateRules() {
//     storage.set('rules', rules);
//     refreshRules();
// }
