package market.services;

public interface ICommand<TParam, TReturn> {

	TReturn handle(TParam param);
}
