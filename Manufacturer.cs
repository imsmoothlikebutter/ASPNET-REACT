using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ICT2106
{
    public class Manufacturer
    {
        public int Id { get; set; }
        public string? ManufacturerName { get; set; }

        public string? ManufacturerContactNumber { get; set; }
        public string? ManufacturerEmail { get; set; }
    }
}
