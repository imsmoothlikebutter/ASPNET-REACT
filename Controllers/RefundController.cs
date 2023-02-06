using Microsoft.AspNetCore.Mvc;

namespace ICT2106.Controllers;

[ApiController]
[Route("[controller]")]
public class RefundController : ControllerBase
{
    private static readonly int[] RequestId = new[]
    {
        1,2,3,4,5
    };
    private static readonly int[] OrderId = new[]
    {
        1,2,3,4,5
    };
    private static readonly string[] Reason = new[]
    {
        "Broken", "Damaged", "Not serviceable","Inaccurate Product Description","Broken"
    };
    private static readonly string[] Status = new[]
    {
        "Verified", "Refunded", "Pending approval","Refunded","Refunded"
    };
    private readonly ILogger<RefundController> _logger;

    public RefundController(ILogger<RefundController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<Refund> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new Refund
        {   
            RequestId = RequestId[Random.Shared.Next(RequestId.Length)],
            OrderId = OrderId[Random.Shared.Next(OrderId.Length)],
            reason = Reason[Random.Shared.Next(Reason.Length)],
            status = Status[Random.Shared.Next(Status.Length)]
        })
        .ToArray();
    }
}
