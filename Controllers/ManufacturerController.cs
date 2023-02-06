using Microsoft.AspNetCore.Mvc;

namespace ICT2106.Controllers;

[ApiController]
[Route("[controller]")]
public class ManufacturerController : ControllerBase
{
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
        return Enumerable.Range(1, 5).Select(index => new Manufacturer
        {
            Id = Random.Shared.Next(1, 55),
            ManufacturerName = Name[Random.Shared.Next(Name.Length)],
            ManufacturerContactNumber = Contact[Random.Shared.Next(Contact.Length)],
            ManufacturerEmail = Email[Random.Shared.Next(Email.Length)]
        })
        .ToArray();
    }
}
