using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ICT2106.Data;
using System.Runtime.ExceptionServices;
using Microsoft.EntityFrameworkCore.SqlServer.Query.Internal;

namespace ICT2106.Controllers;

[ApiController]
[Route("[controller]")]
public class ManufacturerController : ControllerBase
{
    // private readonly ApplicationDbContext _reactContext;
    /* public ManufacturerController(ApplicationDbContext reactContext) {
         _reactContext = reactContext;
     }*/


    Manufacturer[] m = new Manufacturer[] {
        new Manufacturer{   Id =1,
        ManufacturerName ="John",
        ManufacturerContactNumber = "98765443",
        ManufacturerEmail = "John@hotmail.com"},
        new Manufacturer {
            Id = 2,
        ManufacturerName = "George",
        ManufacturerContactNumber = "95424354",
        ManufacturerEmail = "George@hotmail.com"
        }, new Manufacturer {
            Id = 3,
        ManufacturerName = "Mary",
        ManufacturerContactNumber = "92434354",
        ManufacturerEmail = "Mary@hotmail.com"
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
    private readonly ILogger<ManufacturerController> _logger;
    public ManufacturerController(ILogger<ManufacturerController> logger)
    {
        _logger = logger;
    }


    [HttpGet]
    public IEnumerable<Manufacturer> Get()
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
    [HttpPost]
    [Route("test")]
    public IActionResult Post([FromBody] Manufacturer comment)
    {
        m.Append(comment);
        
        return Ok(m);
    }
    /*[HttpGet]
    public async Task<IActionResult> getManufacturers()
    {
        var manufacturers = await _reactContext.Manufacturers.ToListAsync();
        return Ok(manufacturers);
           
    
    }*/
}
