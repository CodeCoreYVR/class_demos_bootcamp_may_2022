// Write chatr code here!

//Sample Message:
// {
//     body: "message body",
//     createdAt: "2020-12-10T09:09:09.1234",
//     flagged: false,
//     id: 1,
//     updatedAt: "2020-12-10T09:09:09.1234",
//     username: "John"
// }

//Create a helper method for messages
const Message = {
  all() {
    return fetch("/messages").then((res) => res.json());
  },
  //usage:
  //Message.all().then(data => console.table(data))
  create(params) {
    return fetch("/messages", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
    });
  },
  //usage
  //Message.create({ body: "Hello World"}).then(console.log("Message created"))
  destroy(id) {
    return fetch(`messages/${id}`, { method: "DELETE" });
  },
};

const loadMessages = () => {
  const messagesContainer = document.querySelector("#messages");
  Message.all().then((messages) => {
    let htmlString = "";
    //flagFilter button will filter the messages to only display
    //the flagged messages
    const flagFilter = document.querySelector("#flag-filter");
    if (flagFilter.innerHTML === "All Messages") {
      // Initially the .map method works to display the index of messages
      // but changing the code to .forEach makes it easier to manipulate
      // the individual messages and its attributes
      // let htmlString = "";
      // messagesContainer.innerHTML = messages
      // .map(
      //   m =>
      messages.forEach((m) => {
        if (m.flagged) {
          htmlString += `
            <li>
              <strong>${m.id}</strong> ${m.username}: ${m.body}
              <button data-id="${m.id}" class="btn-delete">Delete</button>
              <button><i data-id=${m.id} data-flagged=${m.flagged} class="fas fa-flag"></i></button> 
            </li>
            `;
        } else {
          htmlString += "";
        }
      });
      // )
      // .join('');
      messagesContainer.innerHTML = htmlString;
    } else {
      messages.forEach((m) => {
        let flag;
        if (m.flagged) {
          flag = "fas";
        } else {
          flag = "far";
        }
        htmlString += `
          <li>
            <strong>${m.id}</strong> ${m.username}: ${m.body}
            <button data-id="${m.id}" class="btn-delete">Delete</button>
            <button><i data-id=${m.id} data-flagged=${m.flagged} class="${flag} fa-flag"></i></button> 
          </li>
          `;
      });
      messagesContainer.innerHTML = htmlString;
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  loadMessages();

  const newMessageForm = document.querySelector("#new-message");

  newMessageForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // In this case, the `currentTarget` will be node of the form.
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    Message.create({
      body: formData.get("body"),
      username: formData.get("username"),
    }).then(() => {
      currentTarget.reset();
      loadMessages();
    });
  });

  const messagesContainer = document.querySelector("#messages");

  messagesContainer.addEventListener("click", (event) => {
    const { target } = event;
    const deleteButton = target.closest(".btn-delete");

    if (deleteButton) {
      //You can console.log to determine if your event listener is obtaining
      //the correct data you need to manipulate:
      // console.log(
      //   'Message id:',
      //   // shortcut for reading & writing attributes
      //   // beginning with data-
      //   deleteButton.dataset.id,
      //   deleteButton.getAttribute('data-id'),
      // );

      const { id } = deleteButton.dataset;

      if (!confirm(`Are you want to delete Message (id=${id})?`)) {
        return;
      }

      Message.destroy(id).then(() => {
        loadMessages();
      });
    }
  });

  messagesContainer.addEventListener("click", (event) => {
    const { target } = event;
    const flagButton = target.closest("i.fa-flag");

    if (flagButton) {
      const messageFlagged = flagButton.getAttribute("data-flagged");
      const messageId = flagButton.getAttribute("data-id");

      if (messageFlagged === "false") {
        fetch(`/messages/${messageId}`, {
          method: "PATCH",
          body: JSON.stringify({ flagged: true }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(() => {
          loadMessages();
        });
      } else {
        fetch(`/messages/${messageId}`, {
          method: "PATCH",
          body: JSON.stringify({ flagged: false }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(() => {
          loadMessages();
        });
      }
    }
  });

  const filterButton = document.querySelector("#flag-filter");

  filterButton.addEventListener("click", () => {
    filterButton.classList.toggle("filtered");
    if (filterButton.getAttribute("class", "filtered")) {
      filterButton.innerText = "All Messages";
      loadMessages();
    } else {
      filterButton.innerText = "Flagged Messages";
      loadMessages();
    }
  });
});
