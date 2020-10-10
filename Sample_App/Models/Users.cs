using System;
using System.Collections.Generic;

namespace Sample_App.Models
{
    public partial class Users
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public short? Age { get; set; }
        public string Address { get; set; }
        public string Role { get; set; }
    }
}
