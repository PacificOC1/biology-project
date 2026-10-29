// Shared behaviour for every page. You shouldn't need to edit this file.

// 1. Photos: if an image file isn't in the images folder yet,
//    show a striped box saying which file name to add.
document.querySelectorAll(".photo img").forEach(function (img) {
  function showMissing() {
    var box = document.createElement("div");
    box.className = "missing";
    box.innerHTML = "<span>Photo goes here:<br><code>" + img.getAttribute("src") + "</code></span>";
    img.replaceWith(box);
  }
  if (img.complete && img.naturalWidth === 0) showMissing();
  else img.addEventListener("error", showMissing);
});

// 2. Conservation status ladder.
//    On each organism page, set data-status on the .status div to one of:
//    LC, NT, VU, EN, CR, EW, EX  (or leave it blank until you know).
var STATUSES = [
  ["LC", "Least Concern"],
  ["NT", "Near Threatened"],
  ["VU", "Vulnerable"],
  ["EN", "Endangered"],
  ["CR", "Critically Endangered"],
  ["EW", "Extinct in the Wild"],
  ["EX", "Extinct"]
];

document.querySelectorAll(".status").forEach(function (el) {
  var code = (el.dataset.status || "").trim().toUpperCase();
  var source = el.dataset.source || "IUCN Red List";
  var list = document.createElement("ol");
  list.className = "ladder";
  var found = null;

  STATUSES.forEach(function (s) {
    var li = document.createElement("li");
    li.textContent = s[0];
    li.title = s[1];
    if (s[0] === code) { li.className = "here"; li.setAttribute("aria-current", "true"); found = s; }
    list.appendChild(li);
  });

  var label = document.createElement("p");
  label.className = "status-label";
  label.textContent = "Conservation status";

  var ends = document.createElement("div");
  ends.className = "ladder-ends";
  ends.innerHTML = "<span>Safe</span><span>Gone</span>";

  var name = document.createElement("p");
  name.className = "status-name";
  name.innerHTML = found
    ? "<strong>" + found[1] + "</strong> (" + source + ")"
    : "Status not set yet: add data-status to this page.";

  el.append(label, list, ends, name);
});
