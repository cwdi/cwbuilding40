var imageURL = "images/building_info/40.jpg";


    function changeBuilding(building) {
        if (document.images) {
          if (imageURL != "images/building_info/"+building+".jpg") imageURL = "images/building_info/"+building+".jpg";
          else imageURL = "images/building_info/"+building+".jpg";

        document.myImage.src = imageURL;
    }}
