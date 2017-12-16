namespace geany.dotnet_core.Infrastructure.Service.Generic
{
    public class ServiceResponse<T> : ServiceResponse
    {
        public T Data { get; set; }
    }
}
