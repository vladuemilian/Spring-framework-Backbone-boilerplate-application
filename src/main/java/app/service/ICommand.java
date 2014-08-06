package app.service;

public interface ICommand<TParam, TReturn> {

	TReturn handle(TParam param);
}
