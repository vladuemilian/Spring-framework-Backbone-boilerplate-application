package market.services;

public interface IQuery<TReturn> {
	public TReturn execute();
}
