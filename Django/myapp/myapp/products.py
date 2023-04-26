from django.http import HttpResponse, JsonResponse

def index(request):
  productData = [
    {
      "id":1,
      "name":"Regular T Shirt", 
      "brand":"Roadstar", 
      "price":350, 
      "discountedPrice":450, 
      "discountedPercentage":"45%",
      "imageUrl": "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/e/h/h/l-hlts002640-highlander-original-imagngnbk7fyyedg.jpeg?q=70"
    },
    {
      "id":2,
      "name":"Regular T Shirt", 
      "brand":"Roadstar", 
      "price":350, 
      "discountedPrice":450, 
      "discountedPercentage":"45%",
      "imageUrl": "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/w/8/h/m-2115-the-dry-state-original-imagzgz9va6ugfxd.jpeg?q=70"
    }
  ]
  response = JsonResponse(productData)
  return HttpResponse(response)