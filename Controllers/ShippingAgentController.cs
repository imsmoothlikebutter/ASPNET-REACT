using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ICT2106.Data;
using System.Runtime.ExceptionServices;
using Microsoft.EntityFrameworkCore.SqlServer.Query.Internal;

namespace ICT2106.Controllers;

[ApiController]
[Route("[controller]")]
public class ShippingAgentController : ControllerBase
{
    // private readonly ApplicationDbContext _reactContext;
    /* public ManufacturerController(ApplicationDbContext reactContext) {
         _reactContext = reactContext;
     }*/


    ShippingAgent[] m = new ShippingAgent[] {
        new ShippingAgent{   Id =1,
        ShippingAgentName ="DHL" },
        new ShippingAgent {
            Id = 2,
        ShippingAgentName ="Parcel Force"
        }
};
    private static readonly string[] Email = new[]
    {
        "George@hotmail.com", "King@gmail.com", "Queen@outlook.com", "Jack@hotmail.com"
    };
    private static readonly string[] Name = new[]
    {
        "George", "King", "Queen", "Jack"
    };
    private static readonly string[] Contact = new[]
    {
        "92843545", "90038244", "98762233","93454644"
    };
    private readonly ILogger<ShippingAgent> _logger;
    public ShippingAgentController(ILogger<ShippingAgent> logger)
    {
        _logger = logger;
    }


    [HttpGet]
    public IEnumerable<ShippingAgent> Get()
    {
        /*return Enumerable.Range(1, 5).Select(index => new Manufacturer
        {
            Id = Random.Shared.Next(1, 55),
            ManufacturerName = Name[Random.Shared.Next(Name.Length)],
            ManufacturerContactNumber = Contact[Random.Shared.Next(Contact.Length)],
            ManufacturerEmail = Email[Random.Shared.Next(Email.Length)]
        })
        .ToArray();*/
        return m;
    }
  
    /*[HttpGet]
    public async Task<IActionResult> getManufacturers()
    {
        var manufacturers = await _reactContext.Manufacturers.ToListAsync();
        return Ok(manufacturers);
           
    
    }*/
}
