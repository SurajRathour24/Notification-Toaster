let createToaster = (config) =>{
            return function(toasterNotification){
                let toasterBox = document.createElement("div");
                let toasterWrapper = document.querySelector(".parent");
                toasterBox.className =  "bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700/70 p-4 flex items-start gap-3 backdrop-blur-lg inline-flex";

                toasterBox.innerText = toasterNotification;

                toasterWrapper.appendChild(toasterBox);
                setTimeout(()=>{
                    toasterWrapper.removeChild(toasterBox)
                }, config.duration * 3000);
            }
        }

        let toaster = createToaster({
            maxW : "max",
            width: "full",
            bg: "slate",
            textWhite: "white",
            border: "rounded",
            Shadow: "yes",
            border: 'yes',
            borderRadius : "yes",
            flex: 'yes',
            itemsStart : 'yes',
            gap : 3,
            backdrop: 'yes',
            duration: 1,
        });


        let toaster2 = createToaster({
            maxW : "max",
            width: "full",
            bg: "slate",
            textWhite: "white",
            border: "rounded",
            Shadow: "yes",
            border: 'yes',
            borderRadius : "yes",
            flex: 'yes',
            itemsStart : 'yes',
            gap : 3,
            backdrop: 'yes',
            duration: 2,
        });


         let toaster3 = createToaster({
            maxW : "max",
            width: "full",
            bg: "slate",
            textWhite: "white",
            border: "rounded",
            Shadow: "yes",
            border: 'yes',
            borderRadius : "yes",
            flex: 'yes',
            itemsStart : 'yes',
            gap : 3,
            backdrop: 'yes',
            duration: 3,
        });

        


        toaster("You have successfully logged in");
        toaster2("Ankush has been accepted your request");
        toaster3("Riya has been accepted your request");