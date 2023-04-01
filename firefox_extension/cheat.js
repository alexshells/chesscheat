document.body.style.border = "5px solid red";

function process_moves(element) {
    let move_list = [];
    for (child of element.children) {
        let moves = child.innerText.split('\n');
        moves.shift();
        move_list = move_list.concat(moves);
    }
    let move_string = "";
    for (let index = 0; index < move_list.length; index++) {
        move_string += move_list[index];
        if (index < move_list.length - 1) {
            move_string += "_";
        }
    }
    console.log(move_string);
}

let element_to_observe = document.getElementsByTagName("vertical-move-list");

const observer = new MutationObserver((mutations) => {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes.length != 0) {
            process_moves(element_to_observe[0]);
        }
    })
});

observer.observe(element_to_observe[0], { subtree: true, childList: true });
