import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListProviderAppointmentsService from '@modules/appointments/services/ListProviderAppointmentsService';

export default class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { day, month, year } = request.query;

    const listProviderDayAvailability = container.resolve(
      ListProviderAppointmentsService,
    );

    const appointments = await listProviderDayAvailability.execute({
      provider_id: userId,
      day: Number(day),
      month: Number(month),
      year: Number(year),
    });

    return response.json(classToClass(appointments));
  }
}
