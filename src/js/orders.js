const url = "http://localhost:8080/api/v1/orders/all";

const fetchdata = async () => {
  const response = await fetch(url);

  const data = await response.json();
  return data;
};

const displayData = async () => {
  const tablebody = document.getElementById("tablebody");

  const data = await fetchdata();

  if (!data) {
    console.log("No Data");
    return;
  } else {
    data.forEach((order) => {
      const row = document.createElement("tr");


      const idCell = document.createElement("td");
      idCell.innerText = order.id;

      const trackingCell = document.createElement("td");
      trackingCell.innerText =  order.trackingId;

      const orderDateCell = document.createElement("td");
      orderDateCell.innerText =  order.orderedDate;


      const totalAmount = document.createElement("td");
      totalAmount.innerText = order.totalAmount;

      const statusCell = document.createElement("td");
      statusCell.innerText = order.status;
     

      const itemsCell = document.createElement("td");
      itemsCell.innerText = order.CartItemsDto[0];

      const actionCell = document.createElement("td");
      
      const aedit =  document.createElement("a");
      aedit.setAttribute('href',`/updateOrder?id=${order.id}`);
      aedit.classList.add("btn","btn-success");
      aedit.innerHTML="Edit";

      actionCell.appendChild(aedit);

      row.appendChild(idCell);
      row.appendChild(trackingCell);
      row.appendChild(orderDateCell);
      row.appendChild(totalAmount);
      row.appendChild(itemsCell);
      row.appendChild(statusCell);
      row.appendChild(actionCell);


    });
  }
};

displayData();


//      let response = await fetch(url);

/*private Long id;
	
	private String description;
	
	private Date orderedDate;
	
	private Double amount; //total amount after applying & discount
	
	private Double totalAmount; //total amount before applying & discount
	
	private Double discountedAmount;
	
	private String address;
	
	private OrderStatus status;
	
	private UUID trackingId;
	
	private String userName;
	
	private Long contactNumber;
	
	private List<CartItemsDto> cartItems;*/