using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ICT2106
{
    public class Refund
    {
        public int RequestId { get; set; }
        public int OrderId { get; set; }

        public string? reason { get; set; }
        public string? status { get; set; }

        public int RefundAmt { get; set; }
    }
}
